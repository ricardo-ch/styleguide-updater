const replaceList = [
  {
    replace: "jssGlobals.pageBackground",
    with: "jssGlobals.colors.pageBackground",
  },
  { replace: "jssGlobals.linkColor", with: "jssGlobals.colors.link" },
  { replace: "jssGlobals.turquoise", with: "jssGlobals.colors.turquoise" },
  { replace: "jssGlobals.black", with: "jssGlobals.colors.black" },
  { replace: "jssGlobals.green", with: "jssGlobals.colors.green" },
  { replace: "jssGlobals.yellow", with: "jssGlobals.colors.yellow" },
  { replace: "jssGlobals.orange", with: "jssGlobals.colors.orange" },
  { replace: "jssGlobals.red", with: "jssGlobals.colors.red" },
  { replace: "jssGlobals.blue", with: "jssGlobals.colors.blue" },
  { replace: "jssGlobals.purple", with: "jssGlobals.colors.purple" },
  { replace: "jssGlobals.paper", with: "jssGlobals.colors.paper" },
  { replace: "jssGlobals.white", with: "jssGlobals.colors.white" },
  { replace: "jssGlobals.transparent", with: "jssGlobals.colors.transparent" },
  { replace: "jssGlobals.primaryColor", with: "jssGlobals.colors.primary" },
  {
    replace: "jssGlobals.primaryColorDark",
    with: "jssGlobals.colors.primaryDark",
  },
  {
    replace: "jssGlobals.primaryColorLight",
    with: "jssGlobals.colors.primaryLight",
  },
  { replace: "jssGlobals.secondaryColor", with: "jssGlobals.colors.secondary" },
  {
    replace: "jssGlobals.secondaryColorDark",
    with: "jssGlobals.colors.secondaryDark",
  },
  {
    replace: "jssGlobals.secondaryColorLight",
    with: "jssGlobals.colors.secondaryLight",
  },
  {
    replace: "jssGlobals.statusSuccess",
    with: "jssGlobals.colors.statusSuccess",
  },
  { replace: "jssGlobals.statusInfo", with: "jssGlobals.colors.statusInfo" },
  {
    replace: "jssGlobals.statusWarning",
    with: "jssGlobals.colors.statusWarning",
  },
  {
    replace: "jssGlobals.statusDanger",
    with: "jssGlobals.colors.statusDanger",
  },
  {
    replace: "jssGlobals.statusBuyerWinning",
    with: "jssGlobals.colors.statusBuyerWinning",
  },
  {
    replace: "jssGlobals.statusBuyerOutbid",
    with: "jssGlobals.colors.statusBuyerOutbid",
  },
  {
    replace: "jssGlobals.statusBuyerOpen",
    with: "jssGlobals.colors.statusBuyerOpen",
  },
  {
    replace: "jssGlobals.statusBuyerNotSold",
    with: "jssGlobals.colors.statusBuyerNotSold",
  },
  {
    replace: "jssGlobals.statusBuyerSold",
    with: "jssGlobals.colors.statusBuyerSold",
  },
  {
    replace: "jssGlobals.statusBuyerBought",
    with: "jssGlobals.colors.statusBuyerBought",
  },
  {
    replace: "jssGlobals.statusBuyerLost",
    with: "jssGlobals.colors.statusBuyerLost",
  },
  {
    replace: "jssGlobals.statusSellerOpen",
    with: "jssGlobals.colors.statusSellerOpen",
  },
  {
    replace: "jssGlobals.statusSellerNotSold",
    with: "jssGlobals.colors.statusSellerNotSold",
  },
  {
    replace: "jssGlobals.statusSellerSold",
    with: "jssGlobals.colors.statusSellerSold",
  },
  {
    replace: "jssGlobals.primaryLight100",
    with: "jssGlobals.colors.primaryLight100",
  },
  {
    replace: "jssGlobals.primaryLight200",
    with: "jssGlobals.colors.primaryLight200",
  },
  {
    replace: "jssGlobals.primaryLight300",
    with: "jssGlobals.colors.primaryLight300",
  },
  {
    replace: "jssGlobals.primaryLight400",
    with: "jssGlobals.colors.primaryLight400",
  },
  {
    replace: "jssGlobals.primaryLight500",
    with: "jssGlobals.colors.primaryLight500",
  },
  {
    replace: "jssGlobals.primaryLight600",
    with: "jssGlobals.colors.primaryLight600",
  },
  {
    replace: "jssGlobals.primaryLight700",
    with: "jssGlobals.colors.primaryLight700",
  },
  {
    replace: "jssGlobals.primaryLight800",
    with: "jssGlobals.colors.primaryLight800",
  },
  {
    replace: "jssGlobals.primaryLight900",
    with: "jssGlobals.colors.primaryLight900",
  },
  {
    replace: "jssGlobals.primaryLight50",
    with: "jssGlobals.colors.primaryLight50",
  },
  {
    replace: "jssGlobals.secondary100",
    with: "jssGlobals.colors.secondary100",
  },
  {
    replace: "jssGlobals.secondary200",
    with: "jssGlobals.colors.secondary200",
  },
  {
    replace: "jssGlobals.secondary300",
    with: "jssGlobals.colors.secondary300",
  },
  {
    replace: "jssGlobals.secondary400",
    with: "jssGlobals.colors.secondary400",
  },
  {
    replace: "jssGlobals.secondary500",
    with: "jssGlobals.colors.secondary500",
  },
  {
    replace: "jssGlobals.secondary600",
    with: "jssGlobals.colors.secondary600",
  },
  {
    replace: "jssGlobals.secondary700",
    with: "jssGlobals.colors.secondary700",
  },
  {
    replace: "jssGlobals.secondary800",
    with: "jssGlobals.colors.secondary800",
  },
  {
    replace: "jssGlobals.secondary900",
    with: "jssGlobals.colors.secondary900",
  },
  { replace: "jssGlobals.secondary50", with: "jssGlobals.colors.secondary50" },
  { replace: "jssGlobals.grey100", with: "jssGlobals.colors.grey100" },
  { replace: "jssGlobals.grey200", with: "jssGlobals.colors.grey200" },
  { replace: "jssGlobals.grey300", with: "jssGlobals.colors.grey300" },
  { replace: "jssGlobals.grey400", with: "jssGlobals.colors.grey400" },
  { replace: "jssGlobals.grey500", with: "jssGlobals.colors.grey500" },
  { replace: "jssGlobals.grey600", with: "jssGlobals.colors.grey600" },
  { replace: "jssGlobals.grey700", with: "jssGlobals.colors.grey700" },
  { replace: "jssGlobals.grey800", with: "jssGlobals.colors.grey800" },
  { replace: "jssGlobals.grey900", with: "jssGlobals.colors.grey900" },
  { replace: "jssGlobals.grey50", with: "jssGlobals.colors.grey50" },
  {
    replace: "jssGlobals.spacings.component.xs",
    with: "jssGlobals.spacing.md",
  },
  {
    replace: "jssGlobals.spacings.container.xs",
    with: "jssGlobals.spacing.md",
  },
  {
    replace: "jssGlobals.spacings.container.sm",
    with: "jssGlobals.spacing.lg",
  },
  { replace: "jssGlobals.font", with: "jssGlobals.fonts.mainFamily" },
  { replace: "jssGlobals.fontHeaders", with: "jssGlobals.fonts.headerFamily" },
  { replace: "jssGlobals.superMinBlack", with: "jssGlobals.grey300" },
  { replace: "jssGlobals.minBlack", with: "jssGlobals.grey400" },
  { replace: "jssGlobals.faintBlack", with: "jssGlobals.grey300" },
  { replace: "jssGlobals.lightBlack", with: "jssGlobals.grey600" },
  { replace: "jssGlobals.darkBlack", with: "jssGlobals.grey900" },
  { replace: "jssGlobals.errorColor", with: "jssGlobals.statusDanger" },
  { replace: "jssGlobals.darkWhite", with: "'rgba(255, 255, 255, 0.87)'" },
  { replace: "jssGlobals.lightWhite", with: "'rgba(255, 255, 255, 0.54)'" },
  {
    replace: "jssGlobals.mediumLightWhite",
    with: "'rgba(255, 255, 255, 0.3)'",
  },
  {
    replace: "jssGlobals.superLightWhite",
    with: "'rgba(255, 255, 255, 0.12)'",
  },
  { replace: "jssGlobals.error100", with: "'#ffcdd2'" },
  { replace: "jssGlobals.error200", with: "'#ef9a9a'" },
  { replace: "jssGlobals.error300", with: "'#e57373'" },
  { replace: "jssGlobals.error400", with: "'#ef5350'" },
  { replace: "jssGlobals.error500", with: "'#f44336'" },
  { replace: "jssGlobals.error600", with: "'#e53935'" },
  { replace: "jssGlobals.error700", with: "'#d32f2f'" },
  { replace: "jssGlobals.error800", with: "'#c62828'" },
  { replace: "jssGlobals.error900", with: "'#b71c1c'" },
  { replace: "jssGlobals.errorA100", with: "'#ff8a80'" },
  { replace: "jssGlobals.errorA200", with: "'#ff5252'" },
  { replace: "jssGlobals.errorA400", with: "'#ff1744'" },
  { replace: "jssGlobals.errorA700", with: "'#d50000'" },
  { replace: "jssGlobals.error50", with: "'#ffebee'" },
  {
    replace: "jssGlobals.primaryLightA100",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLightA200",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLightA400",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLightA700",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLight50",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLight100",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLight200",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLight300",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLight400",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLight500",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLight600",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLight700",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLight800",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLight900",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLightA100",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLightA200",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLightA400",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.primaryLightA700",
    with: "jssGlobals.colors.primaryLight",
  },
  {
    replace: "jssGlobals.secondary50",
    with: "jssGlobals.colors.secondaryLight",
  },
  {
    replace: "jssGlobals.secondary100",
    with: "jssGlobals.colors.secondaryLight",
  },
  {
    replace: "jssGlobals.secondary200",
    with: "jssGlobals.colors.secondaryLight",
  },
  { replace: "jssGlobals.secondary300", with: "jssGlobals.colors.secondary" },
  { replace: "jssGlobals.secondary400", with: "jssGlobals.colors.secondary" },
  { replace: "jssGlobals.secondary500", with: "jssGlobals.colors.secondary" },
  { replace: "jssGlobals.secondary600", with: "jssGlobals.colors.secondary" },
  { replace: "jssGlobals.secondary700", with: "jssGlobals.colors.secondary" },
  { replace: "jssGlobals.secondary800", with: "jssGlobals.colors.secondary" },
  {
    replace: "jssGlobals.secondary900",
    with: "jssGlobals.colors.secondaryDark",
  },
  { replace: "jssGlobals.secondaryA100", with: "jssGlobals.colors.secondary" },
  { replace: "jssGlobals.secondaryA200", with: "jssGlobals.colors.secondary" },
  { replace: "jssGlobals.secondaryA400", with: "jssGlobals.colors.secondary" },
  { replace: "jssGlobals.secondaryA700", with: "jssGlobals.colors.secondary" },

  { replace: "jssGlobals.greyA100", with: "'#d5d5d5'" },
  { replace: "jssGlobals.greyA200", with: "'#aaaaaa'" },
  { replace: "jssGlobals.greyA400", with: "'#303030'" },
  { replace: "jssGlobals.greyA700", with: "'#616161'" },
  {
    replace: "jssGlobals.transitioneaseInOut",
    with: "'cubic-bezier(0.4, 0, 0.2, 1)'",
  },
  {
    replace: "jssGlobals.transitioneaseEaseOut",
    with: "'cubic-bezier(0.0, 0, 0.2, 1)'",
  },
  {
    replace: "jssGlobals.transitioneaseEaseIn",
    with: "'cubic-bezier(0.4, 0, 1, 1)'",
  },
  {
    replace: "jssGlobals.transitioneaseSharp",
    with: "'cubic-bezier(0.4, 0, 0.6, 1)'",
  },
  {
    replace: "jssGlobals.lines.default",
    with: "1px solid $colors_grey400",
  },
  { replace: "jssGlobals.fonts.display4.fontSize", with: "112px" },
  { replace: "jssGlobals.fonts.display3.fontSize", with: "56px" },
  { replace: "jssGlobals.fonts.display2.fontSize", with: "45px" },
  { replace: "jssGlobals.fonts.display1.fontSize", with: "34px" },
  { replace: "jssGlobals.fonts.headline.fontSize", with: "64px" },
  { replace: "jssGlobals.fonts.title3.fontSize", with: "20px" },
  { replace: "jssGlobals.fonts.title2.fontSize", with: "24px" },
  { replace: "jssGlobals.fonts.title.fontSize", with: "34px" },
  { replace: "jssGlobals.fonts.subheading.fontSize", with: "16px" },
  { replace: "jssGlobals.fonts.body2.fontSize", with: "14px" },
  { replace: "jssGlobals.fonts.body1.fontSize", with: "14px" },
  { replace: "jssGlobals.fonts.caption.fontSize", with: "12px" },
  { replace: "jssGlobals.fonts.button.fontSize", with: "14px" },
  {
    replace: "$typographyUX_default_component;",
    with:
      "'p'; /* This used to be the variable $typographyUX_default_component TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_default_fontWeight;",
    with:
      "400; /* This used to be the variable $typographyUX_default_fontWeight TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_default_lineHeight;",
    with:
      "1.35em; /* This used to be the variable $typographyUX_default_lineHeight TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_default_fontFamily;",
    with:
      '"Roboto", "Helvetica", "Arial", sans-serif; /* This used to be the variable $typographyUX_default_fontFamily TODO: Use the Typography component instead of styling via CSS */',
  },
  {
    replace: "$typographyUX_default_color;",
    with:
      "#202020; /* This used to be the variable $typographyUX_default_color TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_default_textAlign;",
    with:
      "inherit; /* This used to be the variable $typographyUX_default_textAlign TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_default_margin;",
    with:
      "0; /* This used to be the variable $typographyUX_default_margin TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_default_padding;",
    with:
      "0; /* This used to be the variable $typographyUX_default_padding TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_display1_component;",
    with:
      "'h1'; /* This used to be the variable $typographyUX_display1_component TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_display1_fontSize;",
    with:
      "34px; /* This used to be the variable $typographyUX_display1_fontSize TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_display1_fontFamily;",
    with:
      '"Ubuntu","Roboto", "Helvetica", "Arial", sans-serif; /* This used to be the variable $typographyUX_display1_fontFamily TODO: Use the Typography component instead of styling via CSS */',
  },
  {
    replace: "$typographyUX_display2_component;",
    with:
      "'h2'; /* This used to be the variable $typographyUX_display2_component TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_display2_fontSize;",
    with:
      "28px; /* This used to be the variable $typographyUX_display2_fontSize TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_display2_fontFamily;",
    with:
      '"Ubuntu","Roboto", "Helvetica", "Arial", sans-serif; /* This used to be the variable $typographyUX_display2_fontFamily TODO: Use the Typography component instead of styling via CSS */',
  },
  {
    replace: "$typographyUX_display3_component;",
    with:
      "'h3'; /* This used to be the variable $typographyUX_display3_component TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_display3_fontSize;",
    with:
      "24px; /* This used to be the variable $typographyUX_display3_fontSize TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_display3_fontWeight;",
    with:
      "500; /* This used to be the variable $typographyUX_display3_fontWeight TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_display3_fontFamily;",
    with:
      '"Ubuntu","Roboto", "Helvetica", "Arial", sans-serif; /* This used to be the variable $typographyUX_display3_fontFamily TODO: Use the Typography component instead of styling via CSS */',
  },
  {
    replace: "$typographyUX_display4_component;",
    with:
      "'h4'; /* This used to be the variable $typographyUX_display4_component TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_display4_fontSize;",
    with:
      "20px; /* This used to be the variable $typographyUX_display4_fontSize TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_display4_fontWeight;",
    with:
      "500; /* This used to be the variable $typographyUX_display4_fontWeight TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_display5_component;",
    with:
      "'h4'; /* This used to be the variable $typographyUX_display5_component TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_display5_fontSize;",
    with:
      "16px; /* This used to be the variable $typographyUX_display5_fontSize TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_display5_fontWeight;",
    with:
      "500; /* This used to be the variable $typographyUX_display5_fontWeight TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_body1_fontSize;",
    with:
      "15px; /* This used to be the variable $typographyUX_body1_fontSize TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_body1_fontWeight;",
    with:
      "500; /* This used to be the variable $typographyUX_body1_fontWeight TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_body2_fontSize;",
    with:
      "14px; /* This used to be the variable $typographyUX_body2_fontSize TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_body2_fontWeight;",
    with:
      "500; /* This used to be the variable $typographyUX_body2_fontWeight TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_body3_fontSize;",
    with:
      "15px; /* This used to be the variable $typographyUX_body3_fontSize TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_body4_fontSize;",
    with:
      "14px; /* This used to be the variable $typographyUX_body4_fontSize TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_body5_fontSize;",
    with:
      "13px; /* This used to be the variable $typographyUX_body5_fontSize TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_body5_color;",
    with:
      "#757575; /* This used to be the variable $typographyUX_body5_color TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_body6_fontSize;",
    with:
      "12px; /* This used to be the variable $typographyUX_body6_fontSize TODO: Use the Typography component instead of styling via CSS */",
  },
  {
    replace: "$typographyUX_body6_color;",
    with:
      "#757575; /* This used to be the variable $typographyUX_body6_color TODO: Use the Typography component instead of styling via CSS */",
  },
];

module.exports = replaceList;
