const sizes = {
    small: '440px',
    medium: '576px',
    midway: '768px',
    large: '1000px',
    largePlus: '1200px',
    largest: '1440px'
  }

  export const devices = {
    phone: `(min-width: ${sizes.small})`,
    tablet: `(min-width: ${sizes.medium})`,
    largeTablet: `(min-width: ${sizes.midway})`,
    largeTabletMax: `(max-width: ${sizes.midway})`,
    desktop: `(min-width: ${sizes.large})`,
    desktopPlus: `(min-width: ${sizes.largePlus})`,
    desktopLarge: `(min-width: ${sizes.largest})`,
    IEsmall: `(max-width: ${sizes.medium})`,
    IEmedium: `(max-width: ${sizes.large})`,
  }