const replaceList = [
  {
    replace: "$pageBackground",
    with: "$colors_pageBackground",
  },
  { replace: "$blue", with: "#0096db" },
  { replace: "$linkColor", with: "$colors_link" },
  { replace: "$turquoise", with: "$colors_turquoise" },
  { replace: "$black", with: "$colors_black" },
  { replace: "$green", with: "$colors_green" },
  { replace: "$yellow", with: "$colors_yellow" },
  { replace: "$orange", with: "$colors_orange" },
  { replace: "$red", with: "$colors_red" },
  { replace: "$blue", with: "$colors_blue" },
  { replace: "$purple", with: "$colors_purple" },
  { replace: "$paper", with: "$colors_paper" },
  { replace: "$white", with: "$colors_white" },
  { replace: "$transparent", with: "transparent" },
  { replace: "$primaryColor", with: "$colors_primary" },
  {
    replace: "$primaryColorDark",
    with: "$colors_primary",
  },
  {
    replace: "$primaryColorLight",
    with: "$colors_primaryLight",
  },
  { replace: "$secondaryColor", with: "$colors_secondary" },
  {
    replace: "$secondaryColorDark",
    with: "$colors_secondary",
  },
  {
    replace: "$secondaryColorLight",
    with: "$colors_secondaryLight",
  },
  {
    replace: "$statusSuccess",
    with: "$colors_statusSuccess",
  },
  { replace: "$statusInfo", with: "$colors_statusInfo" },
  {
    replace: "$statusWarning",
    with: "$colors_statusWarning",
  },
  {
    replace: "$statusDanger",
    with: "$colors_statusDanger",
  },
  {
    replace: "$statusBuyerWinning",
    with: "$colors_statusBuyerWinning",
  },
  {
    replace: "$statusBuyerOutbid",
    with: "$colors_statusBuyerOutbid",
  },
  {
    replace: "$statusBuyerOpen",
    with: "$colors_statusBuyerOpen",
  },
  {
    replace: "$statusBuyerNotSold",
    with: "$colors_statusBuyerNotSold",
  },
  {
    replace: "$statusBuyerSold",
    with: "$colors_statusBuyerSold",
  },
  {
    replace: "$statusBuyerBought",
    with: "$colors_statusBuyerBought",
  },
  {
    replace: "$statusBuyerLost",
    with: "$colors_statusBuyerLost",
  },
  {
    replace: "$statusSellerOpen",
    with: "$colors_statusSellerOpen",
  },
  {
    replace: "$statusSellerNotSold",
    with: "$colors_statusSellerNotSold",
  },
  {
    replace: "$statusSellerSold",
    with: "$colors_statusSellerSold",
  },
  { replace: "$grey100", with: "$colors_grey100" },
  { replace: "$grey200", with: "$colors_grey200" },
  { replace: "$grey300", with: "$colors_grey300" },
  { replace: "$grey400", with: "$colors_grey400" },
  { replace: "$grey500", with: "$colors_grey500" },
  { replace: "$grey600", with: "$colors_grey600" },
  { replace: "$grey700", with: "$colors_grey700" },
  { replace: "$grey800", with: "$colors_grey800" },
  { replace: "$grey900", with: "$colors_grey900" },
  { replace: "$grey50", with: "$colors_grey50" },
  {
    replace: "$spacings_component_xs",
    with: "$spacing_md",
  },
  {
    replace: "$spacings_container_xs",
    with: "$spacing_md",
  },
  {
    replace: "$spacings_container_sm",
    with: "$spacing_lg",
  },
  { replace: "$font", with: "$fonts_mainFamily" },
  { replace: "$fontHeaders", with: "$fonts_headerFamily" },
  { replace: "$superMinBlack", with: "$colors_grey300" },
  { replace: "$minBlack", with: "$colors_grey400" },
  { replace: "$faintBlack", with: "$colors_grey300" },
  { replace: "$lightBlack", with: "$colors_grey600" },
  { replace: "$darkBlack", with: "$colors_grey900" },
  { replace: "$errorColor", with: "$colors_statusDanger" },
  { replace: "$darkWhite", with: "rgba(255, 255, 255, 0.87)" },
  { replace: "$lightWhite", with: "rgba(255, 255, 255, 0.54)" },
  {
    replace: "$mediumLightWhite",
    with: "rgba(255, 255, 255, 0.3)",
  },
  {
    replace: "$superLightWhite",
    with: "rgba(255, 255, 255, 0.12)",
  },
  { replace: "$error100", with: "#ffcdd2" },
  { replace: "$error200", with: "#ef9a9a" },
  { replace: "$error300", with: "#e57373" },
  { replace: "$error400", with: "#ef5350" },
  { replace: "$error500", with: "#f44336" },
  { replace: "$error600", with: "#e53935" },
  { replace: "$error700", with: "#d32f2f" },
  { replace: "$error800", with: "#c62828" },
  { replace: "$error900", with: "#b71c1c" },
  { replace: "$errorA100", with: "#ff8a80" },
  { replace: "$errorA200", with: "#ff5252" },
  { replace: "$errorA400", with: "#ff1744" },
  { replace: "$errorA700", with: "#d50000" },
  { replace: "$error50", with: "#ffebee" },

  {
    replace: "$primaryLight300",
    with: "$colors_primaryLight",
  },
  {
    replace: "$primaryLight500",
    with: "$colors_primaryLight",
  },
  { replace: "$primaryLight50", with: "#e6f4fb" },
  { replace: "$primaryLight100", with: "#b3e0f3" },
  { replace: "$primaryLight200", with: "#80cbec" },
  { replace: "$primaryLight400", with: "#26a6de" },
  { replace: "$primaryLight600", with: "#008ed4" },
  { replace: "$primaryLight700", with: "#0083ce" },
  { replace: "$primaryLight800", with: "#0079c8" },
  { replace: "$primaryLight900", with: "#0068bf" },
  { replace: "$primaryLightA100", with: "#e7f3ff" },
  { replace: "$primaryLightA200", with: "#b4d8ff" },
  { replace: "$primaryLightA400", with: "#81beff" },
  { replace: "$primaryLightA700", with: "#68b1ff" },
  {
    replace: "$secondary100",
    with: "$colors_secondaryLight",
  },
  {
    replace: "$secondary200",
    with: "$colors_secondaryLight",
  },
  { replace: "$secondary300", with: "$colors_secondary" },
  { replace: "$secondary400", with: "$colors_secondary" },
  { replace: "$secondary500", with: "$colors_secondary" },
  { replace: "$secondary600", with: "$colors_secondary" },
  { replace: "$secondary700", with: "$colors_secondary" },
  { replace: "$secondary800", with: "$colors_secondary" },
  {
    replace: "$secondary900",
    with: "$colors_secondary",
  },
  {
    replace: "$secondary50",
    with: "$colors_secondaryLight",
  },
  { replace: "$secondaryA100", with: "$colors_secondary" },
  { replace: "$secondaryA200", with: "$colors_secondary" },
  { replace: "$secondaryA400", with: "$colors_secondary" },
  { replace: "$secondaryA700", with: "$colors_secondary" },

  { replace: "$greyA100", with: "#d5d5d5" },
  { replace: "$greyA200", with: "#aaaaaa" },
  { replace: "$greyA400", with: "#303030" },
  { replace: "$greyA700", with: "#616161" },
  {
    replace: "$transitioneaseInOut",
    with: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  {
    replace: "$transitioneaseEaseOut",
    with: "cubic-bezier(0.0, 0, 0.2, 1)",
  },
  {
    replace: "$transitioneaseEaseIn",
    with: "cubic-bezier(0.4, 0, 1, 1)",
  },
  {
    replace: "$transitioneaseSharp",
    with: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  {
    replace: "$lines_default",
    with: "1px solid $colors_grey400",
  },
  { replace: "$fonts_display4_fontSize", with: "112px" },
  { replace: "$fonts_display3_fontSize", with: "56px" },
  { replace: "$fonts_display2_fontSize", with: "45px" },
  { replace: "$fonts_display1_fontSize", with: "34px" },
  { replace: "$fonts_headline_fontSize", with: "64px" },
  { replace: "$fonts_title3_fontSize", with: "20px" },
  { replace: "$fonts_title2_fontSize", with: "24px" },
  { replace: "$fonts_title_fontSize", with: "34px" },
  { replace: "$fonts_subheading_fontSize", with: "16px" },
  { replace: "$fonts_body2_fontSize", with: "14px" },
  { replace: "$fonts_body1_fontSize", with: "14px" },
  { replace: "$fonts_caption_fontSize", with: "12px" },
  { replace: "$fonts_button_fontSize", with: "14px" },
  { replace: "$ads_side_width", with: "300px" },
  { replace: "$header_logoHeight_default", with: "40px" },
  { replace: "$header_logoHeight_xs", with: "30px" },
  { replace: "$borderRadius_sm", with: "$borderRadius" },
  { replace: "$shadows_0", with: "none" },
  {
    replace: "$shadows_1;",
    with:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="1" */',
  },
  {
    replace: "$shadows_2;",
    with:
      '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="2" */',
  },
  {
    replace: "$shadows_3;",
    with:
      '0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="3" */',
  },
  {
    replace: "$shadows_4;",
    with:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="4" */',
  },
  {
    replace: "$shadows_5;",
    with:
      '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="5" */',
  },
  {
    replace: "$shadows_6;",
    with:
      '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="6" */',
  },
  {
    replace: "$shadows_7;",
    with:
      '0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="7" */',
  },
  {
    replace: "$shadows_8;",
    with:
      '0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="8" */',
  },
  {
    replace: "$shadows_9;",
    with:
      '0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="9" */',
  },
  {
    replace: "$shadows_10;",
    with:
      '0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="10" */',
  },
  {
    replace: "$shadows_11;",
    with:
      '0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="11" */',
  },
  {
    replace: "$shadows_12;",
    with:
      '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="12" */',
  },
  {
    replace: "$shadows_13;",
    with:
      '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="13" */',
  },
  {
    replace: "$shadows_14;",
    with:
      '0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="14" */',
  },
  {
    replace: "$shadows_15;",
    with:
      '0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="15" */',
  },
  {
    replace: "$shadows_16;",
    with:
      '0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="16" */',
  },
  {
    replace: "$shadows_17;",
    with:
      '0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="17" */',
  },
  {
    replace: "$shadows_18;",
    with:
      '0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="18" */',
  },
  {
    replace: "$shadows_19;",
    with:
      '0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="19" */',
  },
  {
    replace: "$shadows_20;",
    with:
      '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="20" */',
  },
  {
    replace: "$shadows_21;",
    with:
      '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="21" */',
  },
  {
    replace: "$shadows_22;",
    with:
      '0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="22" */',
  },
  {
    replace: "$shadows_23;",
    with:
      '0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="23" */',
  },
  {
    replace: "$shadows_24;",
    with:
      '0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12); /* TODO: rather use Card or Paper component with elevation="24" */',
  },
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
