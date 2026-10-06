#!/usr/bin/env node
// Calculadora de economía unitaria para ofertas low ticket.
// Uso: node tools/unit-economics.mjs --price 9.9 --bump 4.9:0.25 [--bump 3:0.35] [opciones]
// Ver `--help`. Fórmulas explicadas en playbook/formulas.md.

import { fileURLToPath } from 'node:url';

export function calcular({
  price,
  bumps = [],
  feePct = 0.099,
  feeFixed = 0.1,
  refund = 0.07,
  targetMargin = 0.35,
  cutMultiple = 1.5,
}) {
  if (!(price > 0)) throw new Error('price debe ser mayor que 0');
  for (const b of bumps) {
    if (!(b.price >= 0) || !(b.attach >= 0 && b.attach <= 1)) {
      throw new Error('cada bump necesita price >= 0 y attach entre 0 y 1');
    }
  }
  const brutoMedio = price + bumps.reduce((s, b) => s + b.price * b.attach, 0);
  const comision = feePct * brutoMedio + feeFixed;
  const netoMedio = brutoMedio - comision;
  const cpaEquilibrio = netoMedio * (1 - refund);
  const cpaObjetivo = cpaEquilibrio * (1 - targetMargin);
  const topeSinVenta = cpaEquilibrio * cutMultiple;
  const ticketMaximo = price + bumps.reduce((s, b) => s + b.price, 0);
  return {
    ticketMaximo,
    brutoMedio,
    comision,
    netoMedio,
    cpaEquilibrio,
    cpaObjetivo,
    topeSinVenta,
  };
}

function parseArgs(argv) {
  const out = { bumps: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = () => argv[++i];
    if (a === '--price') out.price = Number(next());
    else if (a === '--bump') {
      const [p, at] = next().split(':').map(Number);
      out.bumps.push({ price: p, attach: at });
    } else if (a === '--fee-pct') out.feePct = Number(next());
    else if (a === '--fee-fixed') out.feeFixed = Number(next());
    else if (a === '--refund') out.refund = Number(next());
    else if (a === '--target-margin') out.targetMargin = Number(next());
    else if (a === '--cut-multiple') out.cutMultiple = Number(next());
    else if (a === '--help' || a === '-h') out.help = true;
    else throw new Error(`Argumento desconocido: ${a}`);
  }
  return out;
}

const usd = (n) => `US$ ${n.toFixed(2).replace('.', ',')}`;

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || args.price === undefined) {
    console.log(`Uso: node tools/unit-economics.mjs --price 9.9 [--bump precio:tasa ...] [opciones]

  --price N            Precio del producto principal (USD)
  --bump P:T           Order bump con precio P y tasa de toma T (0 a 1). Repetible
  --fee-pct N          Comisión porcentual (default 0.099)
  --fee-fixed N        Comisión fija por transacción (default 0.10)
  --refund N           Reserva de reembolsos (default 0.07)
  --target-margin N    Margen a reinvertir sobre el equilibrio (default 0.35)
  --cut-multiple N     Múltiplo del equilibrio para apagar sin ventas (default 1.5)

Ejemplo: node tools/unit-economics.mjs --price 9.9 --bump 4.9:0.25`);
    return;
  }
  const r = calcular(args);
  console.log(`Ticket máximo:            ${usd(r.ticketMaximo)}`);
  console.log(`Bruto medio por venta:    ${usd(r.brutoMedio)}`);
  console.log(`Comisión:                 ${usd(r.comision)}`);
  console.log(`Neto medio por venta:     ${usd(r.netoMedio)}`);
  console.log(`CPA de equilibrio:        ${usd(r.cpaEquilibrio)}`);
  console.log(`CPA objetivo (escalar):   ${usd(r.cpaObjetivo)} o menos`);
  console.log(`Apagar sin ventas desde:  ${usd(r.topeSinVenta)} gastados`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (e) {
    console.error(`Error: ${e.message}`);
    process.exit(1);
  }
}
