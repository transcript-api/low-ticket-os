import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calcular } from './unit-economics.mjs';

const cerca = (a, b, tol = 0.01) => assert.ok(Math.abs(a - b) <= tol, `${a} no está cerca de ${b}`);

test('oferta A del Reto Cintura 28: 9,90 + bump 4,90 con 25 %', () => {
  const r = calcular({ price: 9.9, bumps: [{ price: 4.9, attach: 0.25 }] });
  cerca(r.brutoMedio, 11.125);
  cerca(r.netoMedio, 9.92);
  cerca(r.cpaEquilibrio, 9.22);
  cerca(r.cpaObjetivo, 6.0, 0.05);
});

test('oferta B del chat: 15 + extras 3 (35 %) y 5 (25 %)', () => {
  const r = calcular({
    price: 15,
    bumps: [
      { price: 3, attach: 0.35 },
      { price: 5, attach: 0.25 },
    ],
  });
  cerca(r.ticketMaximo, 23, 0);
  cerca(r.netoMedio, 15.49);
  cerca(r.cpaEquilibrio, 14.41);
});

test('sin bumps el bruto medio es el precio', () => {
  const r = calcular({ price: 10 });
  cerca(r.brutoMedio, 10, 0);
  cerca(r.netoMedio, 10 - (0.099 * 10 + 0.1));
});

test('rechaza datos inválidos', () => {
  assert.throws(() => calcular({ price: 0 }));
  assert.throws(() => calcular({ price: 9, bumps: [{ price: 3, attach: 1.5 }] }));
});
