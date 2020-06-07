export default (({ colors, breakpoints: { desktop }, fontFamily }) => ({
  boatInfoContainer: {
    position: 'relative',
    width: 335,
    height: 451,
    margin: 16,
    fontFamily: fontFamily,
    fontSize: 16,
    color: colors.charcoalGrey,
  },
  recommendedContainer: {
    position: 'absolute',
    left: 0,
    top: 20,
    padding: [0, 6, 0, 16],
    background: colors.charcoalGrey,
    color: colors.white.main,
    fontSize: 11,
    fontWeight: 'bold',
    lineHeight: 1.82,
  },
  boatImageWrapper: {
    width: 335,
    height: 206,
    border: ['solid', 1, colors.pinkishGrey],
    backgroundColor: colors.white.main,
    padding: 10,
    boxSizing: 'border-box'
  },
  boatPictureContainer: {
    display: 'block',
    width: 313,
    height: 184,
    objectFit: 'contain',
    boxSizing: 'border-box'
  },
  boatImage: {
    width: 313,
    height: 184,
    objectFit: 'contain',
    boxSizing: 'border-box'
  },
  detailsContainer: {},
  primaryDetailsContainer: {
    display: 'flex',
    height: 62,
    border: ['solid', 1, colors.pinkishGrey],
    borderTop: 'none',
    backgroundColor: colors.white.darker,
    boxSizing: 'border-box'
  },
  nameContainer: {
    flex: 1,
    borderRight: ['solid', 1, colors.pinkishGrey],
    fontStretch: 'normal',
    fontStyle: 'normal',
    textAlign: 'left',
    padding: '10px',
    position: 'relative',
  },
  nameLabel: {
    fontWeight: 'bold',
    lineHeight: 1.25,
    letterSpacing: 0.25,
  },
  yearLabel: {
    lineHeight: 1.25,
    letterSpacing: 0.27,
    marginRight: '10px'
  },
  cityCountryLabel: {
    fontSize: 12,
    lineHeight: 1.67,
    letterSpacing: 'normal',
  },
  likesContainer: {},
  hotContainer: {
    width: 94,
    color: colors.paleRed,
    fontWeight: 'bold',
    fontSize: 11,
    height: 62,
    padding: [16, 10],
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain',
  },
  hotLabel: {
    display: 'inline-block',
    background: colors.paleRed,
    color: colors.white.main,
    fontSize: 9,
    lineHeight: 1.11,
    padding: 2,
    borderRadius: 2,
    marginRight: 2,
  },
  viewCountLabel: {
    display: 'inline-block',
  },
  sinceLabel: {
    fontWeight: 'normal',
  },

  secondaryDetailsContainer: {
    display: 'flex',
    height: 52,
    border: ['solid', 1, colors.pinkishGrey],
    borderTop: 'none',
    backgroundColor: colors.white.main,
    boxSizing: 'border-box'
  },
  secondaryDetails: {
    padding: [12, 12, 8],
    borderRight: ['solid', 1, colors.pinkishGrey],
    flex: 1,
    textAlign: 'center',
  },
  secondaryDetailsValues: {
    fontSize: 14,
    lineHeight: 1.14,
    fontWeight: 'bold',
  },
  secondaryDetailsLabels: {
    fontSize: 10,
    lineHeight: 1.6,
    opacity: 0.44,
  },
  reviewsContainer: {
    borderRight: 'none',
    width: 136,
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewStars: {
    background: 'url("images/stars_2020-06-06/stars.png") no-repeat',
    width: ({ offset }) => (80 * offset / 100),
    height: 16,
  },

  featuresNPriceContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.white.main,
  },
  featuresContainer: {
    display: 'flex',
    height: 60,
    border: ['solid', 1, colors.pinkishGrey],
    borderTop: 'none',
    boxSizing: 'border-box'
  },
  features: {
    flex: 1,
    padding: [12, 6, 8],
    overflow: 'hidden',
    '&:first-of-type': {
      paddingLeft: 12
    },
    '&:last-of-type': {
      paddingRight: 12
    }
  },
  featureLabel: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: 11,
    lineHeight: 1.82,
    fontWeight: 'bold',
    color: colors.charcoalGrey80,
    paddingLeft: 14,
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 6,
      width: 12,
      height: 12,
      background: 'url("/images/check-material_2020-06-06/check-material.png") no-repeat'
    }
  },
  featuresKeyValuePair: {},
  sailTypeValue: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 1.67,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  priceNBookingContainer: {
    display: 'flex',
    height: 75,
    border: ['solid', 1, colors.pinkishGrey],
    borderTop: 'none',
    boxSizing: 'border-box'
  },
  priceContainer: {
    borderRight: ['solid', 1, colors.pinkishGrey],
    width: '50%',
    padding: [32, 10, 20],
    boxSizing: 'border-box',
    position: 'relative',
  },
  priceValue: {
    display: 'inline-block',
    fontWeight: 'bold',
    lineHeight: 1.25,
    letterSpacing: 0.3,
    position: 'relative',
    '&:before': {
      content: '"FROM"',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: -16,
      fontSize: 10,
      opacity: 0.44,
      lineHeight: 1.6
    },
    '&:after': {
      content: ({ priceType }) => `"${priceType}"`,
      display: 'block',
      position: 'absolute',
      left: '105%',
      top: 5,
      fontSize: 11,
      fontWeight: 'bold',
      letterSpacing: 0.24
    }
  },
  helpButton: {
    cursor: 'pointer',
    position: 'absolute',
    right: 10,
    top: 34,
    width: 16,
    height: 16,
    background: 'url("/images/help-material_2020-06-06/help-material.png") no-repeat'
  },
  directBookingContainer: {
    width: '50%',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  directBookingLabel: {
    display: 'inline-block',
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 1.4,
    marginBottom: 6,
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: -12,
      top: 2,
      width: 12,
      height: 12,
      background: 'url("/images/flash-on-material_2020-06-06/flash-on-material.png") no-repeat'
    }
  },
  viewDetailsButton: {
    cursor: 'pointer',
    width: 147,
    height: 32,
    background: 'url("/images/s_2020-06-06/s.png") no-repeat',
  },

  [`@media (min-width: ${desktop}px)`]: {
    boatInfoContainer: {
      width: 875,
      height: 235,
      display: 'flex'
    },
    boatImageWrapper: {
      width: 375,
      height: 235,
    },
    boatPictureContainer: {
      width: 353,
      height: 213,
    },
    boatImage: {
      width: 353,
      height: 213,
    },
    detailsContainer: {
      width: 500,
    },
    primaryDetailsContainer: {
      borderTop: ['solid', 1, colors.pinkishGrey],
      borderLeft: 'none',
    },
    likesContainer: {
      cursor: 'pointer',
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translate(0, -50%)',
      width: 16,
      height: 16,
      backgroundImage: 'url("images/heart_2020-06-06/heart@2x.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
    hotContainer: {
      width: 139,
    },
    secondaryDetailsContainer: {
      borderLeft: 'none',
    },
    reviewsContainer: {
      width: 211,
    },
    featuresNPriceContainer: {
      flexDirection: 'row',
    },
    featuresContainer: {
      height: 121,
      width: 288,
      borderLeft: 'none',
      flexFlow: 'column',
      padding: 12,
    },
    features: {
      padding: 0,
      flex: 'none',
      '&:first-of-type': {
        padding: 0
      },
      '&:last-of-type': {
        padding: 0
      }
    },
    featuresKeyValuePair: {
      display: 'flex',
      '& $secondaryDetailsLabels': {
        width: 64,
      },
      '& $sailTypeValue': {
        flexShrink: 100,
        marginLeft: 12,
        whiteSpace: 'initial',
        maxHeight: 40,
      },
    },
    featureLabel: {
      display: 'inline-block',
      marginRight: 16,
      '&:before': {
        background: 'none',
        backgroundImage: 'url("/images/check-material_2020-06-06/check-material@2x.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
      }
    },
    priceNBookingContainer: {
      height: 121,
      borderLeft: 'none',
      flexDirection: 'column',
      width: 212,
    },
    priceContainer: {
      borderRight: 'none',
      borderBottom: ['solid', 1, colors.pinkishGrey],
      width: '100%',
      height: 49,
      padding: [12, 50, 10]
    },
    priceValue: {
      '&:before': {
        left: -40,
        top: 4,
      }
    },
    helpButton: {
      right: 10,
      top: 16,
      background: 'none',
      backgroundImage: 'url("/images/help-material_2020-06-06/help-material@2x.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    },
    directBookingContainer: {
      width: '100%'
    },
    directBookingLabel: {
      '&:before': {
        background: 'none',
        backgroundImage: 'url("/images/flash-on-material_2020-06-06/flash-on-material@2x.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
      }
    },
    viewDetailsButton: {
      cursor: 'pointer',
      width: 147,
      height: 32,
      background: 'none',
      backgroundImage: 'url("/images/s_2020-06-06/s@2x.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    },
  }
}));
