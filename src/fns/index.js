import { $ } from './$';
import { add } from './add';
import { and } from './and';
import { cat } from './cat';
import { ceil } from './ceil';
import { div } from './div';
import { eq } from './eq';
import { fix } from './fix';
import { flr } from './flr';
import { get } from './get';
import { gt } from './gt';
import { gte } from './gte';
import { idx } from './idx';
import { is } from './is';
import { join } from './join';
import { len } from './len';
import { low } from './low';
import { lt } from './lt';
import { lte } from './lte';
import { max } from './max';
import { min } from './min';
import { mul } from './mul';
import { not } from './not';
import { or } from './or';
import { pl } from './pl';
import { pr } from './pr';
import { rnd } from './rnd';
import { rpl } from './rpl';
import { rpt } from './rpt';
import { sbs } from './sbs';
import { slc } from './slc';
import { sub } from './sub';
import { trim } from './trim';
import { up } from './up';

export { $ } from './$';
export { add } from './add';
export { and } from './and';
export { cat } from './cat';
export { ceil } from './ceil';
export { div } from './div';
export { eq } from './eq';
export { flr } from './flr';
export { fix } from './fix';
export { get } from './get';
export { gt } from './gt';
export { gte } from './gte';
export { idx } from './idx';
export { is } from './is';
export { join } from './join';
export { len } from './len';
export { low } from './low';
export { lt } from './lt';
export { lte } from './lte';
export { max } from './max';
export { min } from './min';
export { mul } from './mul';
export { not } from './not';
export { or } from './or';
export { pl } from './pl';
export { pr } from './pr';
export { rnd } from './rnd';
export { rpl } from './rpl';
export { rpt } from './rpt';
export { sbs } from './sbs';
export { slc } from './slc';
export { sub } from './sub';
export { trim } from './trim';
export { up } from './up';

export const logicFns = {
  and,
  eq,
  gt,
  gte,
  is,
  lt,
  lte,
  not,
  or,
};

export const numberFns = {
  add,
  ceil,
  div,
  flr,
  fix,
  max,
  min,
  mul,
  rnd,
  sub,
};

export const stringFns = {
  cat,
  idx,
  len,
  low,
  pl,
  pr,
  rpt,
  rpl,
  sbs,
  slc,
  trim,
  up,
};

export const utilFns = {
  $,
  get,
  join,
  idx,
  len,
  slc,
};

export const fns = {
  ...logicFns,
  ...numberFns,
  ...stringFns,
  ...utilFns,
};
