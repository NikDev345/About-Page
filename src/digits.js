export const H  = { h: 0,   m: 180 };
export const V  = { h: 270, m: 90 };
export const TL = { h: 180, m: 270 };
export const TR = { h: 0,   m: 270 };
export const BL = { h: 180, m: 90 };
export const BR = { h: 0,   m: 90 };
export const E  = { h: 135, m: 135 };

export const digits = [
  [
    BR,H,H,BL,
    V,BR,BL,V,
    V,V,V,V,
    V,V,V,V,
    V,TR,TL,V,
    TR,H,H,TL
  ],
  [
    BR,H,BL,E,
    TR,BL,V,E,
    E,V,V,E,
    E,V,V,E,
    BR,TL,TR,BL,
    TR,H,H,TL
  ],
  [
    BR,H,H,BL,
    TR,H,BL,V,
    BR,H,TL,V,
    V,BR,H,TL,
    V,TR,H,BL,
    TR,H,H,TL
  ],
  [
    BR,H,H,BL,
    TR,H,BL,V,
    E,BR,TL,V,
    E,TR,BL,V,
    BR,H,TL,V,
    TR,H,H,TL
  ],
  [
    BR,BL,BR,BL,
    V,V,V,V,
    V,TR,TL,V,
    TR,H,BL,V,
    E,E,V,V,
    E,E,TR,TL
  ],
  [
    BR,H,H,BL,
    V,BR,H,TL,
    V,TR,H,BL,
    TR,H,BL,V,
    BR,H,TL,V,
    TR,H,H,TL
  ],
  [
    BR,H,H,BL,
    V,BR,H,TL,
    V,TR,H,BL,
    V,BR,BL,V,
    V,TR,TL,V,
    TR,H,H,TL
  ],
  [
    BR,H,H,BL,
    TR,H,BL,V,
    E,E,V,V,
    E,E,V,V,
    E,E,V,V,
    E,E,TR,TL
  ],
  [
    BR,H,H,BL,
    V,BR,BL,V,
    V,TR,TL,V,
    V,BR,BL,V,
    V,TR,TL,V,
    TR,H,H,TL
  ],
  [
    BR,H,H,BL,
    V,BR,BL,V,
    V,TR,TL,V,
    TR,H,BL,V,
    BR,H,TL,V,
    TR,H,H,TL
  ]
];
