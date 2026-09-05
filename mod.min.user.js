// ==UserScript==
// @name         kMax Mod
// @namespace    http://tampermonkey.net/
// @version      1.3.5
// @description  Mod for max.ru with extra features: beta tester crown, photo metadata, hiding elements and analytics blocking
// @author       kMax Team
// @match        *://*.max.ru/*
// @match        *://max.ru/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

"use strict";(()=>{var C={classes:{name:"span.text.svelte-1riu5uh",phone:"description.weight-400.text-align-left.text-tertiary",settingsTab:".settingsTab.svelte-6bkz6t",photoContainer:".content.svelte-2k9gk6",mover:".mover.svelte-17vzkrm",headerTitle:"#aside-header-title",stories:".storiesStack.svelte-1rr6jx2",storyItem:".storiesStack .avatarStoryRingWrapper.svelte-6ybo81",phoneElement:".phone.svelte-6bkz6t",sferumButton:".item.svelte-6bkz6t",chatList:".scrollable .content .item.svelte-rg2upy",chatItem:".wrapper.svelte-q2jdqb",chatItemSelected:".wrapper.svelte-q2jdqb .cell--selected",chatItemTitle:".cell .title.svelte-q2jdqb .text.svelte-1riu5uh",chatItemMessage:".cell .text.svelte-q2jdqb",chatItemAvatar:".avatar.svelte-1gp4c0a .avatarImage",chatItemBadge:".cell .indicator .badgeIcon",chatItemTime:".cell .time.svelte-q2jdqb",chatItemPinnedIcon:".cell .pinned.svelte-q2jdqb",chatItemMenuButton:".actions .menuButton.svelte-q2jdqb",chatItemReadMarker:".cell .readMarker.svelte-q2jdqb",mainChatMessage:".block .messageWrapper .message.svelte-1kh0oxy",mainChatMessageIncoming:'.message[data-bubbles-variant="incoming"]',mainChatMessageOutgoing:'.message[data-bubbles-variant="outgoing"]',mainChatMessageText:".text.svelte-1htnb3l",mainChatMessageMeta:".meta.svelte-1htnb3l",mainChatMessageTime:".meta.svelte-13lobfv .text",mainChatMessageStatus:".meta .indicators.svelte-13lobfv svg",mainChatMessageReactions:".reactions.svelte-xkv7l2",mainChatMessageReply:".mark.svelte-m3np2o",mainChatMessageSticker:".sticker.svelte-19cataq",mainChatMessageVoice:".attachAudio.svelte-15vy73c",mainChatMessageImage:".media .grid .tile .image",mainChatDateSeparator:".capsule.svelte-3850xr",mainChatScrollButton:".scrollButtonContainer .button.svelte-1snxxha",profileButton:".main.svelte-1hrr6vf.content--clickable",headerBackButton:".header .button--small .content svg",callAudioButton:".header .actions .button:first-child",callVideoButton:".header .actions .button:nth-child(2)",searchButton:".header .actions .button:nth-child(3)",navigationButtonAll:".navigation .item:first-child .button",navigationButtonContacts:".navigation .bottomGroup .button:nth-child(1)",navigationButtonCalls:".navigation .bottomGroup .button:nth-child(2)",navigationButtonSettings:".navigation .settings .button",composer:".composer.svelte-nwz8cp",composerInput:".contenteditable.svelte-1k31az8",composerSendButton:".btn.svelte-nwz8cp .button--primary",composerStickerButton:'.btn.svelte-nwz8cp .button .content svg use[href="#icon_sticker"]',composerVoiceButton:'.btn.svelte-nwz8cp .button .content svg use[href="#icon_microphone"]',composerAttachButton:'.btn.svelte-nwz8cp .button .content svg use[href="#icon_attachment"]'},texts:{sferum:"\u0412\u043E\u0439\u0442\u0438 \u0432 C\u0444\u0435\u0440\u0443\u043C",settings:"Settings",settingsRu:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"},storage:{prefix:"kmod_",keys:{hideStories:"hideStories",hideSferum:"hideSferum",replaceTitle:"replaceTitle",hidePhone:"hidePhone",blockAnalytics:"blockAnalytics",showCrown:"showCrown",showMetadata:"showMetadata",replaceMax:"replaceMax",language:"language"}},tracer:{patterns:["apptracer","tracer","analytics","telemetry","sdk-api.apptracer.ru","crash_token","track_session","uploadBatch","uploadSession","uploadSessionInfo","setRunning","tracerMain","TracerSDK2","t.instance","perf/upload"],storageKeys:["device","session","user","uuid","id"],globalObjects:["TracerSDK2","tracerMain","instance","Tracer","tracer","at","ot","ct","mn","pte","Rte","vte","cne","Pre","vme","Wz","uploadSessionInfo","setRunning","lne","une","l","upload","pte"]},betaTesters:["\u0422\u0438\u043C\u043E\u0445\u0430","\u0422\u0438\u043C\u043E\u0444\u0435\u0439 \u0411\u043E\u0440\u0438\u043D","\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u041F\u043E\u0442\u0435\u043C\u043A\u0438\u043D"]},xe={system:[{value:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',label:"System UI"},{value:"Arial, Helvetica, sans-serif",label:"Arial"},{value:"Arial Black, Gadget, sans-serif",label:"Arial Black"},{value:"Georgia, serif",label:"Georgia"},{value:"Times New Roman, Times, serif",label:"Times New Roman"},{value:"Courier New, monospace",label:"Courier New"},{value:"Verdana, Geneva, sans-serif",label:"Verdana"},{value:"Tahoma, sans-serif",label:"Tahoma"},{value:"Trebuchet MS, sans-serif",label:"Trebuchet MS"},{value:"Impact, Charcoal, sans-serif",label:"Impact"},{value:"Comic Sans MS, cursive",label:"Comic Sans MS"},{value:"Lucida Sans Unicode, Lucida Grande, sans-serif",label:"Lucida Sans"},{value:"Geneva, Tahoma, sans-serif",label:"Geneva"},{value:"Palatino Linotype, Book Antiqua, Palatino, serif",label:"Palatino"},{value:"Bookman Old Style, serif",label:"Bookman"},{value:"Garamond, serif",label:"Garamond"},{value:"Helvetica, sans-serif",label:"Helvetica"},{value:"Franklin Gothic Medium, sans-serif",label:"Franklin Gothic"},{value:"Century Gothic, sans-serif",label:"Century Gothic"},{value:"Copperplate, Copperplate Gothic Light, sans-serif",label:"Copperplate"},{value:"Baskerville, serif",label:"Baskerville"}],google:[{value:"'Inter', sans-serif",label:"Inter",url:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"},{value:"'Roboto', sans-serif",label:"Roboto",url:"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"},{value:"'Open Sans', sans-serif",label:"Open Sans",url:"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap"},{value:"'Montserrat', sans-serif",label:"Montserrat",url:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"},{value:"'Oswald', sans-serif",label:"Oswald",url:"https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap"},{value:"'Raleway', sans-serif",label:"Raleway",url:"https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800;900&display=swap"},{value:"'Lato', sans-serif",label:"Lato",url:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"},{value:"'Playfair Display', serif",label:"Playfair Display",url:"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"},{value:"'Merriweather', serif",label:"Merriweather",url:"https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap"},{value:"'Ubuntu', sans-serif",label:"Ubuntu",url:"https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"},{value:"'Nunito', sans-serif",label:"Nunito",url:"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"},{value:"'Poppins', sans-serif",label:"Poppins",url:"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"},{value:"'Quicksand', sans-serif",label:"Quicksand",url:"https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"},{value:"'Fira Sans', sans-serif",label:"Fira Sans",url:"https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700;800;900&display=swap"},{value:"'Source Sans Pro', sans-serif",label:"Source Sans Pro",url:"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap"},{value:"'PT Sans', sans-serif",label:"PT Sans",url:"https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"},{value:"'IBM Plex Sans', sans-serif",label:"IBM Plex Sans",url:"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"},{value:"'Manrope', sans-serif",label:"Manrope",url:"https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"},{value:"'JetBrains Mono', monospace",label:"JetBrains Mono",url:"https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"},{value:"'Caveat', cursive",label:"Caveat",url:"https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"},{value:"'Marck Script', cursive",label:"Marck Script",url:"https://fonts.googleapis.com/css2?family=Marck+Script&display=swap"}]};var N={name:"kMax Mod",version:"1.3.5",author:"kiwinatra \u043F\u043E\u0442\u0435\u043C\u043A\u0438\u043D \u043A\u043E\u0440\u043E\u0447\u0435",site:"max.ru"};var la={name:C.classes.name,phone:C.classes.phone,phoneElement:C.classes.phoneElement,sferumButton:C.classes.sferumButton,settingsTab:C.classes.settingsTab,stories:C.classes.stories,photoContainer:C.classes.photoContainer,mover:C.classes.mover,headerTitle:C.classes.headerTitle},ca={sferum:C.texts.sferum,settings:C.texts.settings,settingsRu:C.texts.settingsRu},Jr={hideStories:C.storage.keys.hideStories,hideSferum:C.storage.keys.hideSferum,replaceTitle:C.storage.keys.replaceTitle,hidePhone:C.storage.keys.hidePhone,blockAnalytics:C.storage.keys.blockAnalytics,showCrown:C.storage.keys.showCrown,showMetadata:C.storage.keys.showMetadata,replaceMax:C.storage.keys.replaceMax,language:C.storage.keys.language,logView:"logView",fontFamily:"fontFamily",chatTags:"chatTags",templates:"templates"};function da(){let e=!0;for(let[t,n]of Object.entries(la))(!n||n.length===0)&&(console.warn(`[KMOD] Empty selector: ${t}`),e=!1);return e}function ua(){let e=!0;for(let[t,n]of Object.entries(ca))(!n||n.length===0)&&(console.warn(`[KMOD] Empty text: ${t}`),e=!1);return e}typeof window<"u"&&(da()&&ua()||console.warn("[KMOD] Some selectors or texts are empty. Features may not work correctly."));var hn={settingsTitle:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 kMax Mod",settingsSubtitle:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u044F\u043C\u0438",sectionGeneral:"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435",sectionSecurity:"\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C",sectionAppearance:"\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434",sectionMedia:"\u041C\u0435\u0434\u0438\u0430",sectionOther:"\u0414\u0440\u0443\u0433\u043E\u0435",sectionLanguage:"\u042F\u0437\u044B\u043A",sectionAbout:"\u041E \u043C\u043E\u0434\u0435",sectionGeneralDesc:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",sectionSecurityDesc:"\u0417\u0430\u0449\u0438\u0442\u0430 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u0438 \u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",sectionAppearanceDesc:"\u041A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u044F \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0442\u0438\u043B\u044F",sectionMediaDesc:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u043B\u044F \u0444\u043E\u0442\u043E \u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430",sectionOtherDesc:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438",sectionLanguageDesc:"\u0412\u044B\u0431\u043E\u0440 \u044F\u0437\u044B\u043A\u0430 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",sectionAboutDesc:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0432\u0435\u0440\u0441\u0438\u0438 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430\u0445",hideStoriesLabel:"\u0421\u043A\u0440\u044B\u0442\u044C \u0441\u0442\u043E\u0440\u0438\u0441",hideStoriesDesc:"\u0421\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0431\u043B\u043E\u043A \u0441\u043E \u0441\u0442\u043E\u0440\u0438\u0441 \u0432 \u043B\u0435\u043D\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439",hideSferumLabel:"\u0421\u043A\u0440\u044B\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \u0421\u0444\u0435\u0440\u0443\u043C\u0430",hideSferumDesc:'\u0423\u0431\u0438\u0440\u0430\u0435\u0442 \u043A\u043D\u043E\u043F\u043A\u0443 "\u0412\u043E\u0439\u0442\u0438 \u0432 \u0421\u0444\u0435\u0440\u0443\u043C" \u0438\u0437 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430',blockAnalyticsLabel:"\u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438",blockAnalyticsDesc:"\u041F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u044B \u0442\u0440\u0435\u043A\u0435\u0440\u0430 \u043D\u0430 \u0444\u0435\u0439\u043A\u043E\u0432\u044B\u0435, \u0437\u0430\u0449\u0438\u0449\u0430\u044F \u0432\u0430\u0448\u0443 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u044C",hidePhoneLabel:"\u0421\u043A\u0440\u044B\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",hidePhoneDesc:"\u0421\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0432\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u0435",showCrownLabel:"\u041A\u043E\u0440\u043E\u043D\u0430 \u0431\u0435\u0442\u0430-\u0442\u0435\u0441\u0442\u0435\u0440\u0430\u043C",showCrownDesc:"\u0412\u044B\u0434\u0435\u043B\u044F\u0435\u0442 \u0438\u043C\u0435\u043D\u0430 \u0431\u0435\u0442\u0430-\u0442\u0435\u0441\u0442\u0435\u0440\u043E\u0432 \u0437\u043E\u043B\u043E\u0442\u044B\u043C \u0446\u0432\u0435\u0442\u043E\u043C \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u{1F451}",replaceTitleLabel:"kMax \u0432 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0435",replaceTitleDesc:'\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u043F\u0440\u0435\u0444\u0438\u043A\u0441 "kMax | " \u0432 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B',fontFamilyLabel:"\u0428\u0440\u0438\u0444\u0442",fontFamilyDesc:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0448\u0440\u0438\u0444\u0442 \u0434\u043B\u044F \u0432\u0441\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430",fontFamilySystemUI:"System UI",fontFamilyArial:"Arial",fontFamilyArialBlack:"Arial Black",fontFamilyGeorgia:"Georgia",fontFamilyTimesNewRoman:"Times New Roman",fontFamilyCourierNew:"Courier New",fontFamilyVerdana:"Verdana",fontFamilyTahoma:"Tahoma",fontFamilyTrebuchetMS:"Trebuchet MS",fontFamilyImpact:"Impact",fontFamilyComicSansMS:"Comic Sans MS",fontFamilyLucidaSans:"Lucida Sans",fontFamilyGeneva:"Geneva",fontFamilyPalatino:"Palatino",fontFamilyBookman:"Bookman",fontFamilyGaramond:"Garamond",fontFamilyHelvetica:"Helvetica",fontFamilyFranklinGothic:"Franklin Gothic",fontFamilyCenturyGothic:"Century Gothic",fontFamilyCopperplate:"Copperplate",fontFamilyBaskerville:"Baskerville",fontFamilyInter:"Inter",fontFamilyRoboto:"Roboto",fontFamilyOpenSans:"Open Sans",fontFamilyMontserrat:"Montserrat",fontFamilyOswald:"Oswald",fontFamilyRaleway:"Raleway",fontFamilyLato:"Lato",fontFamilyPlayfairDisplay:"Playfair Display",fontFamilyMerriweather:"Merriweather",fontFamilyUbuntu:"Ubuntu",fontFamilyNunito:"Nunito",fontFamilyPoppins:"Poppins",fontFamilyQuicksand:"Quicksand",fontFamilyFiraSans:"Fira Sans",fontFamilySourceSansPro:"Source Sans Pro",fontFamilyPTSans:"PT Sans",fontFamilyIBMPlexSans:"IBM Plex Sans",fontFamilyManrope:"Manrope",fontFamilyJetBrainsMono:"JetBrains Mono",fontFamilyCaveat:"Caveat",fontFamilyMarckScript:"Marck Script",showMetadataLabel:"Metadata \u0434\u043B\u044F \u0444\u043E\u0442\u043E",showMetadataDesc:"\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u043A\u043D\u043E\u043F\u043A\u0443 \u0441 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0435, \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u0438 \u0434\u0430\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0444\u043E\u0442\u043E",replaceMaxLabel:"\u0417\u0430\u043C\u0435\u043D\u0430 Max \u2192 MAX",replaceMaxDesc:'\u0417\u0430\u043C\u0435\u043D\u044F\u0435\u0442 \u0432\u0441\u0435 \u0443\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F "Max" \u043D\u0430 "MAX" \u0432 \u0442\u0435\u043A\u0441\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B',logViewLabel:"\u{1F4E1} \u041B\u043E\u0433\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0441\u0435\u0433\u043E",logViewDesc:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u043B\u043E\u0433\u0438, \u0441\u043E\u0431\u044B\u0442\u0438\u044F, \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438",languageLabel:"\u042F\u0437\u044B\u043A \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",languageRu:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",languageEn:"English",aboutName:"kMax Mod",aboutVersion:"\u0412\u0435\u0440\u0441\u0438\u044F",aboutAuthor:"\u0410\u0432\u0442\u043E\u0440",aboutDescription:"\u041C\u043E\u0434 \u0434\u043B\u044F max.ru \u0441 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u044F\u043C\u0438 \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u0438 \u043A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u0438.",saveButton:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",resetButton:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0435",resetConfirm:"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438?",closeButton:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",statusActive:"\u0410\u043A\u0442\u0438\u0432\u043D\u043E",statusEnabled:"\u0412\u043A\u043B",statusDisabled:"\u0412\u044B\u043A\u043B",toggleOn:"\u0412\u043A\u043B",toggleOff:"\u0412\u044B\u043A\u043B",backToSettings:"\u2190 \u041D\u0430\u0437\u0430\u0434 \u043A \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C",sectionChats:"\u0427\u0430\u0442\u044B",sectionChatsDesc:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u0433\u0430\u043C\u0438 \u0434\u043B\u044F \u0447\u0430\u0442\u043E\u0432",chatTagsLabel:"\u0422\u0435\u0433\u0438 \u0434\u043B\u044F \u0447\u0430\u0442\u043E\u0432",chatTagsDesc:"\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0446\u0432\u0435\u0442\u043D\u044B\u0435 \u0442\u0435\u0433\u0438 \u043A \u0447\u0430\u0442\u0430\u043C \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438",templatesLabel:"\u0428\u0430\u0431\u043B\u043E\u043D\u044B \u043E\u0442\u0432\u0435\u0442\u043E\u0432",templatesDesc:"\u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u0447\u0435\u0440\u0435\u0437 /\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0432 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430"};var xn={settingsTitle:"kMax Mod Settings",settingsSubtitle:"Manage additional features",sectionGeneral:"General",sectionSecurity:"Security",sectionAppearance:"Appearance",sectionMedia:"Media",sectionOther:"Other",sectionLanguage:"Language",sectionAbout:"About",sectionGeneralDesc:"Interface and display settings",sectionSecurityDesc:"Privacy and confidentiality protection",sectionAppearanceDesc:"Visual style customization",sectionMediaDesc:"Photo and content settings",sectionOtherDesc:"Additional features",sectionLanguageDesc:"Select interface language",sectionAboutDesc:"Version and developer information",hideStoriesLabel:"Hide stories",hideStoriesDesc:"Hides the stories block in the feed",hideSferumLabel:"Hide Sferum button",hideSferumDesc:'Removes the "Sign in to Sferum" button from the interface',blockAnalyticsLabel:"Block analytics",blockAnalyticsDesc:"Replaces tracker IDs with fake ones to protect your privacy",hidePhoneLabel:"Hide phone number",hidePhoneDesc:"Hides your phone number in your profile",showCrownLabel:"Beta Tester crown",showCrownDesc:"Highlights beta tester names with gold color and adds \u{1F451}",replaceTitleLabel:"kMax in title",replaceTitleDesc:'Adds "kMax | " prefix to the page title',fontFamilyLabel:"Font Family",fontFamilyDesc:"Select font for the whole site",fontFamilySystemUI:"\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439",fontFamilyArial:"Arial",fontFamilyArialBlack:"Arial Black",fontFamilyGeorgia:"Georgia",fontFamilyTimesNewRoman:"Times New Roman",fontFamilyCourierNew:"Courier New",fontFamilyVerdana:"Verdana",fontFamilyTahoma:"Tahoma",fontFamilyTrebuchetMS:"Trebuchet MS",fontFamilyImpact:"Impact",fontFamilyComicSansMS:"Comic Sans MS",fontFamilyLucidaSans:"Lucida Sans",fontFamilyGeneva:"Geneva",fontFamilyPalatino:"Palatino",fontFamilyBookman:"Bookman",fontFamilyGaramond:"Garamond",fontFamilyHelvetica:"Helvetica",fontFamilyFranklinGothic:"Franklin Gothic",fontFamilyCenturyGothic:"Century Gothic",fontFamilyCopperplate:"Copperplate",fontFamilyBaskerville:"Baskerville",fontFamilyInter:"Inter",fontFamilyRoboto:"Roboto",fontFamilyOpenSans:"Open Sans",fontFamilyMontserrat:"Montserrat",fontFamilyOswald:"Oswald",fontFamilyRaleway:"Raleway",fontFamilyLato:"Lato",fontFamilyPlayfairDisplay:"Playfair Display",fontFamilyMerriweather:"Merriweather",fontFamilyUbuntu:"Ubuntu",fontFamilyNunito:"Nunito",fontFamilyPoppins:"Poppins",fontFamilyQuicksand:"Quicksand",fontFamilyFiraSans:"Fira Sans",fontFamilySourceSansPro:"Source Sans Pro",fontFamilyPTSans:"PT Sans",fontFamilyIBMPlexSans:"IBM Plex Sans",fontFamilyManrope:"Manrope",fontFamilyJetBrainsMono:"JetBrains Mono",fontFamilyCaveat:"Caveat",fontFamilyMarckScript:"Marck Script",showMetadataLabel:"Photo Metadata",showMetadataDesc:"Adds a button with photo information: size, format, and upload date",replaceMaxLabel:"Replace Max \u2192 MAX",replaceMaxDesc:'Replaces all "Max" mentions with "MAX" on the page',logViewLabel:"\u{1F4E1} Log Everything",logViewDesc:"Shows all logs, events, requests and errors in real time",languageLabel:"Interface language",languageRu:"Russian",languageEn:"English",aboutName:"kMax Mod",aboutVersion:"Version",aboutAuthor:"Author",aboutDescription:"Mod for max.ru with additional features for convenience and customization.",saveButton:"Save",resetButton:"Reset All",resetConfirm:"Are you sure you want to reset all settings?",closeButton:"Close",statusActive:"Active",statusEnabled:"On",statusDisabled:"Off",toggleOn:"On",toggleOff:"Off",backToSettings:"\u2190 Back to settings",sectionChats:"Chats",sectionChatsDesc:"Manage tags for chats",chatTagsLabel:"Chat Tags",chatTagsDesc:"Add colored tags to chats for easy organization",templatesLabel:"Reply Templates",templatesDesc:"Quick replies via /command in the input field"};var yn={hideStories:!1,hideSferum:!1,replaceTitle:!1,hidePhone:!1,blockAnalytics:!1,showCrown:!1,showMetadata:!1,language:"ru",logView:!1,replaceMax:!1},Y="kmod_",Ne=!1,x={setDebug(e){Ne=e},get(e){try{let t=localStorage.getItem(Y+e);return t?JSON.parse(t):null}catch(t){return Ne&&console.error(`[STORAGE] Get error for "${e}":`,t),null}},set(e,t){try{localStorage.setItem(Y+e,JSON.stringify(t)),Ne&&console.log(`\u{1F4BE} [STORAGE] Saved ${Y+e} =`,t)}catch(n){console.error(`[STORAGE] Set error for "${e}":`,n)}},remove(e){try{localStorage.removeItem(Y+e),Ne&&console.log(`\u{1F5D1}\uFE0F [STORAGE] Removed ${Y+e}`)}catch(t){console.error(`[STORAGE] Remove error for "${e}":`,t)}},getBoolean(e){let t=localStorage.getItem(Y+e);if(t===null)return!!yn[e];try{return!!JSON.parse(t)}catch{return t==="true"}},setBoolean(e,t){this.set(e,t)},getAll(){return{hideStories:this.getBoolean("hideStories"),hideSferum:this.getBoolean("hideSferum"),replaceTitle:this.getBoolean("replaceTitle"),hidePhone:this.getBoolean("hidePhone"),blockAnalytics:this.getBoolean("blockAnalytics"),showCrown:this.getBoolean("showCrown"),showMetadata:this.getBoolean("showMetadata"),language:this.get("language")||"ru",logView:this.getBoolean("logView"),replaceMax:this.getBoolean("replaceMax")}},resetToDefaults(){for(let[e,t]of Object.entries(yn))this.set(e,t);Ne&&console.log("\u{1F504} [STORAGE] Reset to defaults")},clearAll(){let e=["hideStories","hideSferum","replaceTitle","hidePhone","blockAnalytics","showCrown","showMetadata","replaceMax","language","logView"];for(let t of e)this.remove(t);Ne&&console.log("\u{1F9F9} [STORAGE] All keys cleared")},has(e){return localStorage.getItem(Y+e)!==null},getAllKeys(){let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);n&&n.startsWith(Y)&&e.push(n.replace(Y,""))}return e},getAllValues(){let e={},t=this.getAllKeys();for(let n of t)e[n]=this.get(n);return e}};var ae="[KMOD]",pa={debug:"#888",info:"#4ade80",warn:"#fbbf24",error:"#f87171"},R=!0,i={setEnabled(e){R=e},debug(...e){R&&this.log("debug",...e)},info(...e){R&&this.log("info",...e)},warn(...e){R&&this.log("warn",...e)},error(...e){R&&this.log("error",...e)},log(e,...t){if(!R)return;let n=pa[e];console.log(`%c${ae}`,`color: ${n}; font-weight: bold;`,...t)},group(e){R&&console.group(`${ae} ${e}`)},groupEnd(){R&&console.groupEnd()},table(e){R&&console.table(e)},errorWithStack(e,t){R&&(console.error(`${ae} ${t||"Error"}:`,e),e.stack&&console.debug(`${ae} Stack:`,e.stack))},time(e,t){if(!R){t();return}console.time(`${ae} ${e}`);try{t()}finally{console.timeEnd(`${ae} ${e}`)}},async timeAsync(e,t){if(!R)return t();console.time(`${ae} ${e}`);try{return await t()}finally{console.timeEnd(`${ae} ${e}`)}}};var ut={ru:hn,en:xn},Ie="ru",ct=[],dt={};function $t(e){if(ut[e]||(i.warn(`Locale "${e}" not found, fallback to ru`),e="ru"),Ie!==e){Ie=e,dt={};try{x.set("language",e)}catch(t){i.error("Failed to save language to storage:",t)}for(let t of ct)try{t()}catch(n){i.error("Locale listener error:",n)}}}function v(e){if(dt[e]!==void 0)return dt[e];let t=ut[Ie];if(!t)return i.warn(`Locale data for "${Ie}" not found`),e;let n=t[e];return n==null?(i.warn(`Translation key "${e}" not found in "${Ie}"`),e):(dt[e]=n,n)}function Rt(){return Ie}function ma(){try{let e=x.get("language");if(e==="ru"||e==="en")return e}catch(e){i.debug("Failed to read language from storage:",e)}try{return(navigator.language||navigator.languages?.[0]||"ru").startsWith("ru")?"ru":"en"}catch(e){return i.debug("Failed to detect browser language:",e),"ru"}}function vn(){let e=ma();$t(e),i.info(`\u{1F310} Locale initialized: ${e}`)}function wn(e){return ct.push(e),()=>{ct=ct.filter(t=>t!==e)}}var ie=null,He=[],$e=!1,ye=null,pt=!1,re=null,fa=5e3,Tn={childList:!0,subtree:!0,characterData:!1,attributes:!1},ga=!1;function ba(){if(!(!ie||$e))try{ie.observe(document.body,Tn),$e=!0}catch{}}function Sn(){if(!(!ie||!$e))try{ie.disconnect(),$e=!1}catch{}}function kn(){re&&(clearTimeout(re),re=null),re=window.setTimeout(()=>{re=null,He.length===0&&Sn()},fa)}function A(e){if(He.push(e),ba(),kn(),!ie){ie=new MutationObserver(t=>{ga||(kn(),pt||(pt=!0,ye&&cancelAnimationFrame(ye),ye=requestAnimationFrame(()=>{ye=null,pt=!1;for(let n of He)try{n()}catch(o){console.error("[KMOD] Observer callback error:",o)}})))});try{ie.observe(document.body,Tn),$e=!0}catch(t){console.error("[KMOD] Failed to start observer:",t),ie=null,$e=!1}}return()=>{He=He.filter(t=>t!==e),He.length===0&&(ye&&(cancelAnimationFrame(ye),ye=null),pt=!1,Sn(),re&&(clearTimeout(re),re=null))}}var Pt=!1,Re="",De="",Pe="",Cn=0;function mt(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){let t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}function ve(e){if(!e||e.startsWith("kmod_")||e.startsWith("kmod-"))return!1;let t=e.toLowerCase();return t.includes("tracer")||t.includes("apptracer")||t.includes("device")||t.includes("session")||t.includes("user")||t.includes("id")||t.includes("uuid")}function Dt(e){if(!e)return!1;let t=e.toLowerCase();return t.includes("apptracer")||t.includes("sdk-api.apptracer.ru")}function ft(e,t,n){Cn++,console.group(`%c\u{1F50D} [#${Cn}] ${e} \u2192 ${t}`,"color: #60a5fa; font-weight: bold;"),console.log(`%c  Device: ${Re}`,"color: #34d399;"),console.log(`%c  Session: ${De}`,"color: #34d399;"),console.log(`%c  User: ${Pe}`,"color: #34d399;"),n&&console.log("  Data:",n),console.groupEnd()}function zt(){if(Pt)return;Pt=!0,Re=mt(),De=mt(),Pe=mt(),i.info("\u{1F525} \u041F\u041E\u0414\u041C\u0415\u041D\u0410 ID \u0422\u0420\u0415\u041A\u0415\u0420\u0410 \u0412\u041A\u041B\u042E\u0427\u0415\u041D\u0410"),i.debug(`\u{1F4CA} Device: ${Re}`),i.debug(`\u{1F4CA} Session: ${De}`),i.debug(`\u{1F4CA} User: ${Pe}`);let e=window.XMLHttpRequest,t=function(...c){let l=new e(...c),m="",y=!1,h=!1,f=l.open;l.open=function(w,F,z=!0,B,L){m=typeof F=="string"?F:F.href,y=!z,h=Dt(m),h&&ft("XHR.open",m,{method:w,async:z,isSync:y}),f.call(l,w,F,z,B,L)};let S=Object.getOwnPropertyDescriptor(l,"responseType")?.set;S&&Object.defineProperty(l,"responseType",{set:function(w){if(h&&y){i.debug(`\u{1F9F9} responseType \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u043D: ${w} (sync request)`);return}S.call(this,w)},get:function(){return this._responseType||""},configurable:!0});let M=Object.getOwnPropertyDescriptor(l,"timeout")?.set;M&&Object.defineProperty(l,"timeout",{set:function(w){if(h&&y){i.debug(`\u{1F9F9} timeout \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u043D: ${w} (sync request)`);return}M.call(this,w)},get:function(){return this._timeout||0},configurable:!0});let k=l.send;l.send=function(w){h&&ft("XHR.send",m,w),k.call(l,w)};let T=l.setRequestHeader;return l.setRequestHeader=function(w,F){h||T.call(l,w,F)},l};window.XMLHttpRequest=t,window.XMLHttpRequest.prototype=e.prototype;let n=localStorage.getItem.bind(localStorage);localStorage.getItem=function(c){if(ve(c)){let l=c.toLowerCase(),m=null;return l.includes("device")?m=Re:l.includes("session")?m=De:l.includes("user")?m=Pe:m=mt(),i.debug(`\u{1F9F9} getItem(${c}) \u2192 ${m}`),m}return n(c)};let o=localStorage.setItem.bind(localStorage);localStorage.setItem=function(c,l){if(ve(c)){i.debug(`\u{1F9F9} \u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u044C: ${c}=${l}`);return}o(c,l)};let a=localStorage.removeItem.bind(localStorage);localStorage.removeItem=function(c){if(ve(c)){i.debug(`\u{1F9F9} \u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435: ${c}`);return}a(c)};let r=Object.getOwnPropertyDescriptor(document,"cookie")?.get,s=Object.getOwnPropertyDescriptor(document,"cookie")?.set;r&&s&&Object.defineProperty(document,"cookie",{get:function(){let c=r.call(document);return typeof c=="string"?c.split(";").filter(m=>{let y=m.trim().split("=")[0]||"";return!ve(y)}).join(";"):c},set:function(c){let l=c.split("=")[0]||"";if(ve(l)){i.debug(`\u{1F9F9} \u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 cookie: ${l}`);return}s.call(document,c)},configurable:!0});let u=window.fetch;window.fetch=function(c,l){let m=typeof c=="string"?c:c instanceof URL?c.href:c.url||"";return Dt(m)&&ft("FETCH",m,l?.body),u.call(this,c,l)};let d=navigator.sendBeacon;navigator.sendBeacon=function(c,l){let m=typeof c=="string"?c:c.href;return Dt(m)&&ft("BEACON",m,l),d.call(this,c,l)};let p=["TracerSDK2","tracerMain","instance","Tracer","tracer","at","ot","ct","mn","pte","Rte","vte","cne","Pre","vme","Wz"];for(let c of p)try{if(typeof window[c]<"u"){let l=window[c];window[c]=function(...m){if(i.debug(`\u{1F9F9} \u041F\u0435\u0440\u0435\u0445\u0432\u0430\u0447\u0435\u043D \u0432\u044B\u0437\u043E\u0432: ${c}`),typeof l=="function")try{let y=new l(...m);return y&&(Object.defineProperty(y,"deviceId",{value:Re,writable:!1,configurable:!1}),Object.defineProperty(y,"sessionId",{value:De,writable:!1,configurable:!1}),Object.defineProperty(y,"userId",{value:Pe,writable:!1,configurable:!1})),y}catch{return{deviceId:Re,sessionId:De,userId:Pe}}return l},l&&typeof l=="function"&&Object.assign(window[c],l)}}catch{}let g=console.error;console.error=function(...c){let l=c.map(String).join(" ");l.includes("tracer")||l.includes("apptracer")||l.includes("Socket disconnected")||l.includes("setRequestHeader")||l.includes("XMLHttpRequest")||l.includes("state must be OPENED")||l.includes("responseType")||l.includes("synchronous")||g.apply(console,c)};for(let c=0;c<localStorage.length;c++){let l=localStorage.key(c);if(l&&ve(l)){if(l.startsWith("kmod_")||l.startsWith("kmod-"))continue;localStorage.removeItem(l),i.debug(`\u{1F9F9} \u0423\u0434\u0430\u043B\u0451\u043D localStorage: ${l}`)}}let b=document.cookie.split(";");for(let c of b){let l=c.trim().split("=")[0]||"";if(ve(l)){if(l.startsWith("kmod_")||l.startsWith("kmod-"))continue;document.cookie=`${l}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,i.debug(`\u{1F9F9} \u0423\u0434\u0430\u043B\u0451\u043D cookie: ${l}`)}}i.info("\u2705 \u041F\u041E\u0414\u041C\u0415\u041D\u0410 ID \u0412\u041A\u041B\u042E\u0427\u0415\u041D\u0410"),i.info("\u{1F512} \u0412\u0441\u0435 ID \u0442\u0440\u0435\u043A\u0435\u0440\u0430 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u044B \u043D\u0430 \u0444\u0435\u0439\u043A\u043E\u0432\u044B\u0435")}function En(){Pt=!1,i.info("\u2705 \u041F\u043E\u0434\u043C\u0435\u043D\u0430 ID \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430 (\u043E\u0431\u043D\u043E\u0432\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443)")}function Mn(e,t=document){try{return t.querySelector(e)}catch{return null}}function H(e,t=document){try{return Array.from(t.querySelectorAll(e))}catch{return[]}}function E(e,t={}){let n=document.createElement(e);if(t.className&&(n.className=t.className),t.id&&(n.id=t.id),t.text&&(n.textContent=t.text),t.html&&(n.innerHTML=t.html),t.attrs)for(let[o,a]of Object.entries(t.attrs))n.setAttribute(o,a);if(t.styles&&Object.assign(n.style,t.styles),t.dataset)for(let[o,a]of Object.entries(t.dataset))n.dataset[o]=a;if(t.events)for(let[o,a]of Object.entries(t.events))n.addEventListener(o,a);return n}function Ln(e,t){let n=!1,o=null,a=null;return function(...r){n?(o=r,a=this):(e.apply(this,r),n=!0,setTimeout(()=>{n=!1,o&&(e.apply(a,o),o=null,a=null)},t))}}function Fn(e,t){let n=null;return function(...o){n&&clearTimeout(n),n=window.setTimeout(()=>{n=null,e.apply(this,o)},t)}}function gt(e,t=2e3){"requestIdleCallback"in window?requestIdleCallback(()=>e(),{timeout:t}):setTimeout(e,100)}function Ye(){return document.visibilityState==="visible"}function An(e){let t=()=>e(Ye());return document.addEventListener("visibilitychange",t),()=>document.removeEventListener("visibilitychange",t)}var ht="\u{1F451}",ha="#ffd700",xa="0 0 20px rgba(255, 215, 0, 0.4)",Qe=!1,Je=null,we=null,ya=[C.classes.name,"span.text.svelte-1riu5uh",".text.svelte-1riu5uh"],bt=new Map;function va(e){if(!e)return!1;let t=e.trim().toLowerCase();if(bt.has(t))return bt.get(t);let n=C.betaTesters.some(o=>{let a=o.trim().toLowerCase();return t===a||t.includes(a)||a.includes(t)});return bt.set(t,n),n}function Bn(){for(let e of ya){let t=H(e);if(t.length>0)return t}return[]}function qt(){if(!Qe||!Ye()||!x.getBoolean("showCrown"))return;let t=Bn();if(t.length===0)return;let n=0;for(let o of t){let a=o;if(a.dataset.kmodCrown==="true")continue;let r=a.textContent?.trim()||"";!r||!va(r)||(a.dataset.kmodCrown="true",a.style.color=ha,a.style.fontWeight="700",a.style.textShadow=xa,a.textContent?.includes(ht)||(a.textContent+=` ${ht}`),n++)}n>0&&i.debug(`\u{1F451} Applied ${n} crowns`)}var wa=Ln(qt,500);function ka(){we&&clearTimeout(we),we=window.setTimeout(()=>{we=null,wa()},200)}function On(){qt()}function Nn(){Qe||(Qe=!0,i.info("\u{1F451} Crown enabled"),qt(),Je||(Je=A(()=>ka())))}function In(){if(!Qe)return;Qe=!1,Je&&(Je(),Je=null),we&&(clearTimeout(we),we=null);let e=Bn();for(let t of e){let n=t;n.style.color="",n.style.fontWeight="",n.style.textShadow="",n.textContent&&(n.textContent=n.textContent.replace(` ${ht}`,"").replace(ht,"")),delete n.dataset.kmodCrown}bt.clear(),i.info("\u{1F451} Crown disabled")}var Ta=300,xt="kmod-metadata-btn",Sa=50,Ze=!1,se=null,q=null,Gt=new WeakSet,ke=new Map;function Ca(e){return e<1024?e+" B":e<1024*1024?(e/1024).toFixed(1)+" KB":e<1024*1024*1024?(e/(1024*1024)).toFixed(1)+" MB":(e/(1024*1024*1024)).toFixed(2)+" GB"}async function Ea(e){let t=e.src;if(ke.has(t))return ke.get(t);let n={};n.width=e.naturalWidth||e.width||0,n.height=e.naturalHeight||e.height||0,n.aspectRatio=n.width&&n.height?(n.width/n.height).toFixed(2):"N/A";let o=e.src;if(o){let a=o.split(".").pop()?.toUpperCase()||"Unknown";n.format=a,n.url=o}try{let r=(await fetch(e.src,{method:"HEAD",cache:"force-cache"})).headers.get("content-length");if(r){let s=parseInt(r);!isNaN(s)&&s>0&&(n.fileSize=s,n.fileSizeFormatted=Ca(s))}}catch{}if(n.loadedAt=new Date().toLocaleString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),ke.size>=Sa){let a=ke.keys().next().value;a&&ke.delete(a)}return ke.set(t,n),n}function Ma(e){let t=[{key:"width",label:"\u{1F4D0} \u0428\u0438\u0440\u0438\u043D\u0430"},{key:"height",label:"\u{1F4CF} \u0412\u044B\u0441\u043E\u0442\u0430"},{key:"aspectRatio",label:"\u{1F504} \u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435"},{key:"format",label:"\u{1F4C1} \u0424\u043E\u0440\u043C\u0430\u0442"},{key:"fileSizeFormatted",label:"\u{1F4BE} \u0420\u0430\u0437\u043C\u0435\u0440"},{key:"loadedAt",label:"\u{1F550} \u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E"}],n="",o=!1;for(let a of t){let r=e[a.key];r==null||r===""||r!=="N/A"&&(typeof r=="number"&&r===0||(o=!0,n+=`
            <div class="field">
                <span class="label">${a.label}</span>
                <span class="value">${String(r)}</span>
            </div>
        `))}return e.url&&(o=!0,n+=`
            <div class="field">
                <span class="label">\u{1F517} \u0421\u0441\u044B\u043B\u043A\u0430</span>
                <span class="value" data-copy="${e.url}" style="cursor:pointer;color:#60a5fa;">
                    \u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C
                </span>
            </div>
        `),o||(n='<div class="empty">\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445</div>'),n}function La(e){let t=`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>\u{1F4F7} Metadata</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #0d0d1a;
            color: #e0e0e0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            background: #1a1a2e;
            border-radius: 16px;
            padding: 32px 40px;
            max-width: 480px;
            width: 100%;
            box-shadow: 0 24px 80px rgba(0,0,0,0.8);
            border: 1px solid rgba(255,255,255,0.06);
            animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 16px;
            border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .header h1 {
            font-size: 20px;
            font-weight: 600;
            color: #e0e0e0;
        }
        .header .close {
            color: #555;
            font-size: 24px;
            cursor: pointer;
            padding: 4px 8px;
            border-radius: 4px;
            transition: all 0.2s;
            background: none;
            border: none;
        }
        .header .close:hover {
            color: #e0e0e0;
            background: rgba(255,255,255,0.05);
        }
        .field {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .field:last-child {
            border-bottom: none;
        }
        .field .label {
            color: #888;
            font-size: 14px;
        }
        .field .value {
            color: #e0e0e0;
            font-size: 14px;
            font-weight: 500;
            word-break: break-all;
            max-width: 200px;
            text-align: right;
        }
        .empty {
            color: #555;
            text-align: center;
            padding: 40px 0;
            font-size: 14px;
        }
        .footer {
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid rgba(255,255,255,0.04);
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .footer button {
            background: rgba(255,255,255,0.06);
            border: none;
            color: #888;
            padding: 6px 16px;
            border-radius: 6px;
            font-size: 13px;
            cursor: pointer;
            transition: all 0.2s;
        }
        .footer button:hover {
            background: rgba(255,255,255,0.12);
            color: #e0e0e0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>\u{1F4F7} \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0444\u043E\u0442\u043E</h1>
            <button class="close" onclick="window.close()">\u2715</button>
        </div>
        <div id="content">
            ${Ma(e)}
        </div>
        <div class="footer">
            <button onclick="window.close()">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
    </div>
    <script>
        document.addEventListener('click', function(e) {
            const el = e.target;
            if (el.dataset.copy) {
                navigator.clipboard.writeText(el.dataset.copy).then(() => {
                    const original = el.textContent;
                    el.textContent = '\u2705 \u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E!';
                    setTimeout(() => { el.textContent = original; }, 1500);
                });
            }
        });
    <\/script>
</body>
</html>
    `;try{let n=window.open("","_blank");n?(n.document.write(t),n.document.close(),n.focus()):(i.error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u043A\u043B\u0430\u0434\u043A\u0443. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u043E\u043A\u043D\u0430."),alert("\u26A0\uFE0F \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u043E\u043A\u043D\u0430 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435."))}catch(n){i.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 \u0432\u043A\u043B\u0430\u0434\u043A\u0438:",n)}}function Fa(){let e=document.querySelectorAll("div.actions.svelte-2k9gk6"),t=[];for(let a of e){let r=a.querySelector("img");r&&r.src&&t.push(a)}if(t.length>0)return t;let n=document.querySelectorAll("img"),o=new Set;for(let a of n){if(!a.src)continue;let r=a.parentElement,s=0;for(;r&&s<5;){if(r.classList.contains("actions")){o.add(r);break}r=r.parentElement,s++}}return Array.from(o)}function Hn(e){if(e.querySelector(`.${xt}`)||Gt.has(e))return;let t=e.querySelector("img");if(!t||!t.src)return;if(!t.complete||t.naturalWidth===0){t.addEventListener("load",()=>{Ze&&Hn(e)},{once:!0});return}Gt.add(e);let n=E("button",{className:`button button--small button--ghost svelte-15dnyr ${xt}`,events:{click:async a=>{a.stopPropagation();let s=a.currentTarget.querySelector(".content");s&&(s.textContent="\u23F3 \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",s.style.opacity="0.5");try{let u=await Ea(t);La(u)}catch(u){i.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0445:",u),s&&(s.textContent="\u274C \u041E\u0448\u0438\u0431\u043A\u0430",s.style.color="#ed4245",setTimeout(()=>{s.textContent="Metadata",s.style.color="",s.style.opacity=""},2e3))}finally{s&&s.textContent!=="\u274C \u041E\u0448\u0438\u0431\u043A\u0430"&&(s.textContent="Metadata",s.style.opacity="")}}},attrs:{title:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0444\u043E\u0442\u043E"}}),o=E("span",{className:"content svelte-15dnyr",text:"Metadata"});n.appendChild(o),e.appendChild(n)}function _t(){if(!x.getBoolean("showMetadata"))return;let t=Fa();if(t.length===0)return;let n=0;for(let o of t)o.querySelector(`.${xt}`)||(Hn(o),n++);n>0&&i.debug(`\u{1F4F7} Added ${n} metadata buttons`)}function $n(){let e=document.querySelectorAll(`.${xt}`);for(let t of e)t.remove();Gt=new WeakSet,ke.clear()}function Aa(){q&&clearTimeout(q),q=window.setTimeout(()=>{q=null,_t()},Ta)}function Rn(){x.getBoolean("showMetadata")?_t():$n()}function Dn(){Ze||(Ze=!0,i.info("\u{1F4F7} Metadata button enabled"),_t(),se||(se=A(()=>{Aa()})))}function Pn(){Ze&&(Ze=!1,se&&(se(),se=null),q&&(clearTimeout(q),q=null),$n(),i.info("\u{1F4F7} Metadata button disabled"))}window.addEventListener("beforeunload",()=>{se&&(se(),se=null),q&&(clearTimeout(q),q=null)});var Ba=300,Oa=".storiesStack.svelte-1rr6jx2",yt=!1,le=null,G=null,J=[];function zn(){return J.length>0&&J.some(e=>document.contains(e))||(J=H(Oa),J.length===0&&(J=H(".storiesStack"))),J}function Na(){let e=zn(),t=0;for(let n of e)n.style.display!=="none"&&(n.style.display="none",t++);t>0&&i.debug(`\u{1F4DA} Hidden ${t} stories`)}function qn(){let e=zn(),t=0;for(let n of e)n.style.display==="none"&&(n.style.display="",t++);t>0&&i.debug(`\u{1F4DA} Shown ${t} stories`),J=[]}function jt(){x.getBoolean("hideStories")?Na():qn()}function Ia(){G&&clearTimeout(G),G=window.setTimeout(()=>{G=null,jt()},Ba)}function Gn(){jt()}function _n(){yt||(yt=!0,i.info("\u{1F4DA} Stories hide enabled"),jt(),le||(le=A(()=>{Ia()})))}function jn(){yt&&(yt=!1,le&&(le(),le=null),G&&(clearTimeout(G),G=null),qn(),J=[],i.info("\u{1F4DA} Stories hide disabled"))}window.addEventListener("beforeunload",()=>{le&&(le(),le=null),G&&(clearTimeout(G),G=null)});var Ha=300,$a=".item.svelte-6bkz6t",Vn="\u0412\u043E\u0439\u0442\u0438 \u0432 C\u0444\u0435\u0440\u0443\u043C",vt=!1,ce=null,_=null,ze=new Map;function Ra(e){if((e.textContent?.trim()||"").includes(Vn))return!0;let n=e.querySelectorAll("span");for(let o of n)if(o.textContent?.trim().includes(Vn))return!0;return!1}function Da(){let e=H($a);e.length===0&&(e=H(".item"));let t=[];for(let n of e)Ra(n)&&t.push(n);return t}function Pa(e){!ze.has(e)&&e.parentNode&&ze.set(e,{parent:e.parentNode,nextSibling:e.nextSibling})}function za(){let e=Da(),t=0;for(let n of e)Pa(n),n.remove(),t++;t>0&&i.debug(`\u{1F9F9} Removed ${t} Sferum button(s)`)}function Kn(){let e=0;for(let[t,n]of ze)try{if(document.contains(t))continue;n.nextSibling&&n.nextSibling.parentNode?n.parent.insertBefore(t,n.nextSibling):n.parent.appendChild(t),e++}catch(o){i.debug("Failed to restore Sferum button:",o)}ze.clear(),e>0&&i.debug(`\u267B\uFE0F Restored ${e} Sferum button(s)`)}function Vt(){x.getBoolean("hideSferum")?(ze.size>0&&ze.clear(),za()):Kn()}function qa(){_&&clearTimeout(_),_=window.setTimeout(()=>{_=null,Vt()},Ha)}function Un(){Vt()}function Wn(){vt||(vt=!0,i.info("\u{1F9F9} Sferum button hide enabled"),Vt(),ce||(ce=A(()=>{qa()})))}function Xn(){vt&&(vt=!1,ce&&(ce(),ce=null),_&&(clearTimeout(_),_=null),Kn(),i.info("\u{1F9F9} Sferum button hide disabled"))}window.addEventListener("beforeunload",()=>{ce&&(ce(),ce=null),_&&(clearTimeout(_),_=null)});var Ga=300,_a=".phone.svelte-6bkz6t",wt=!1,de=null,j=null,Q=[];function Yn(){return Q.length>0&&Q.some(e=>document.contains(e))||(Q=H(_a),Q.length===0&&(Q=H(".phone"))),Q}function ja(){let e=Yn(),t=0;for(let n of e)n.style.display!=="none"&&(n.style.display="none",t++);t>0&&i.debug(`\u{1F4F1} Hidden ${t} phone element(s)`)}function Jn(){let e=Yn(),t=0;for(let n of e)n.style.display==="none"&&(n.style.display="",t++);t>0&&i.debug(`\u{1F4F1} Shown ${t} phone element(s)`),Q=[]}function Kt(){x.getBoolean("hidePhone")?ja():Jn()}function Va(){j&&clearTimeout(j),j=window.setTimeout(()=>{j=null,Kt()},Ga)}function Qn(){Kt()}function Zn(){wt||(wt=!0,i.info("\u{1F4F1} Phone hide enabled"),Kt(),de||(de=A(()=>{Va()})))}function eo(){wt&&(wt=!1,de&&(de(),de=null),j&&(clearTimeout(j),j=null),Jn(),Q=[],i.info("\u{1F4F1} Phone hide disabled"))}window.addEventListener("beforeunload",()=>{de&&(de(),de=null),j&&(clearTimeout(j),j=null)});var Ka=500,Ua=2e3,Wa=1e4,kt=!1,ue=null,V=null,to=0,Z=new Map;function Xa(e){return e.includes("Max")&&!e.includes("kMax")&&e.length<=Wa}function Ya(e){let t=e.textContent||"";if(Z.has(e)||!Xa(t))return;Z.set(e,t);let n=t.replace(/(?<!k)Max/g,"MAX");e.textContent=n}function Ja(e){if(!Z.has(e))return;let t=Z.get(e);e.textContent!==t&&(e.textContent=t),Z.delete(e)}function Ut(){let e=Date.now();if(e-to<Ua)return;to=e;let t=x.getBoolean("replaceMax"),n=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(s){let u=s.parentElement;if(!u)return NodeFilter.FILTER_REJECT;let d=u.tagName;if(d==="SCRIPT"||d==="STYLE"||d==="NOSCRIPT")return NodeFilter.FILTER_REJECT;let p=s.textContent||"";if(t){if(p.includes("Max")&&!p.includes("kMax"))return NodeFilter.FILTER_ACCEPT}else if(Z.has(s))return NodeFilter.FILTER_ACCEPT;return NodeFilter.FILTER_REJECT}}),o=[],a;for(;a=n.nextNode();)o.push(a);let r=0;if(t){for(let s of o)Ya(s),r++;r>0&&i.debug(`\u{1F504} Replaced "Max" \u2192 "MAX" in ${r} text nodes`)}else{for(let s of o)Ja(s),r++;r>0&&i.debug(`\u{1F504} Restored ${r} text nodes`)}}function Qa(){V&&clearTimeout(V),V=window.setTimeout(()=>{V=null,Ut()},Ka)}function no(){if(Z.size===0)return;let e=0;for(let[t,n]of Z)t.textContent!==n&&(t.textContent=n,e++);Z.clear(),e>0&&i.debug(`\u{1F504} Restored ${e} text nodes (full cleanup)`)}function oo(){Ut()}function ao(){kt||(kt=!0,i.info('\u{1F504} Replace "Max" \u2192 "MAX" enabled'),Ut(),ue||(ue=A(()=>{Qa()})))}function ro(){kt&&(kt=!1,ue&&(ue(),ue=null),V&&(clearTimeout(V),V=null),no(),i.info('\u{1F504} Replace "Max" \u2192 "MAX" disabled'))}window.addEventListener("beforeunload",()=>{ue&&(ue(),ue=null),V&&(clearTimeout(V),V=null),no()});var Te="kMax | ",Tt="replaceTitle";function Za(){let e=document.title;return e.startsWith(Te)&&(e=e.slice(Te.length)),e}function io(e){document.documentElement.dataset.kmodOriginalTitle=e}function lo(){return document.documentElement.dataset.kmodOriginalTitle||null}function Xt(){return document.title.startsWith(Te)}function co(e){document.title!==e&&(document.title=e)}function Yt(){if(Xt())return;let e=lo();e||(e=Za(),io(e)),e.startsWith(Te)&&(e=e.slice(Te.length),io(e));let t=`${Te}${e}`;co(t),i.debug(`\u{1F4DD} Title applied: ${t}`)}function uo(){if(!Xt())return;let e=lo();e||(e=document.title.slice(Te.length)),e||(e="max.ru"),co(e),i.debug(`\u{1F4DD} Title restored: ${e}`)}function po(){x.getBoolean(Tt)?Yt():uo()}function mo(){x.setBoolean(Tt,!0),Yt(),i.info("\u{1F4DD} Title prefix enabled")}function fo(){x.setBoolean(Tt,!1),uo(),i.info("\u{1F4DD} Title prefix disabled")}function er(){x.getBoolean(Tt)&&!Xt()&&Yt()}var et=null,Wt=!1;function so(){if(Wt)return;let e=document.querySelector("head title");e&&(et=new MutationObserver(()=>{setTimeout(()=>{er()},50)}),et.observe(e,{childList:!0,characterData:!0,subtree:!0}),Wt=!0,i.debug("\u{1F4DD} Title observer started"))}function tr(){et&&(et.disconnect(),et=null,Wt=!1,i.debug("\u{1F4DD} Title observer stopped"))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{so()}):so();window.addEventListener("beforeunload",()=>{tr()});var nr=150,bo=5,ho=100,go=500,Ce=!1,I=null,Se=null,Ge=[],ee=null,Jt=!1,or=0;function qe(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="function")return"[Function]";if(typeof e=="symbol")return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;try{let t=JSON.stringify(e,(n,o)=>typeof o=="function"?"[Function]":typeof o=="symbol"?o.toString():o instanceof Error?`${o.name}: ${o.message}`:o,2);return t.length>go&&(t=t.slice(0,go)+"... (truncated)"),t}catch{return String(e)}}function ar(){let e=new Date;return e.toLocaleTimeString("ru-RU",{hour12:!1})+"."+String(e.getMilliseconds()).padStart(3,"0")}function rr(){Se||(Se=E("div",{styles:{position:"fixed",top:"10px",right:"10px",zIndex:"999999",pointerEvents:"none",maxWidth:"80vw",maxHeight:"90vh",overflow:"hidden",fontFamily:"monospace",fontSize:"12px",lineHeight:"1.4",color:"#e0e0e0",textShadow:"0 0 8px rgba(0,0,0,0.9)"}}),I=E("div",{styles:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"2px",maxHeight:"calc(90vh - 20px)",overflowY:"auto",scrollbarWidth:"none",padding:"4px 6px"}}),I.style.cssText+="::-webkit-scrollbar { display: none; }",Se.appendChild(I),document.body.appendChild(Se))}function ir(e,t,n){if(!(!Ce||!I)&&!Jt){Jt=!0;try{for(;I.children.length>=nr;){let p=I.firstChild;p&&I.removeChild(p)}let o={log:"#b5bac1",info:"#3ba55c",warn:"#faa81a",error:"#ed4245"},a=document.createElement("div");a.style.cssText=`
            display: flex;
            gap: 8px;
            font-size: 12px;
            line-height: 1.3;
            white-space: pre-wrap;
            word-break: break-word;
            opacity: 0.95;
            color: ${o[t]||"#b5bac1"};
            max-width: 90vw;
            padding: 2px 0;
            border-bottom: 1px solid rgba(255,255,255,0.04);
            animation: kmodLogFade 0.15s ease;
        `;let r=document.createElement("span");r.textContent=ar(),r.style.cssText="color: #888; flex-shrink: 0; min-width: 72px;";let s=document.createElement("span");s.textContent=e,s.style.cssText=`
            color: ${o[t]||"#888"};
            font-weight: 600;
            flex-shrink: 0;
            min-width: 50px;
        `;let u=document.createElement("span"),d=typeof n=="string"?n:qe(n);u.textContent=d,u.style.cssText="color: #f0f0f0; word-break: break-word;",a.appendChild(r),a.appendChild(s),a.appendChild(u),I.appendChild(a),I.scrollTop>=I.scrollHeight-I.clientHeight-20&&setTimeout(()=>{I&&(I.scrollTop=I.scrollHeight)},10),or++}catch{}finally{Jt=!1}}}function Qt(){if(Ge.length===0)return;let e=Ge.splice(0,bo);for(let t of e)ir(t.type,t.level,t.data);Ge.length>0&&!ee&&(ee=window.setTimeout(()=>{ee=null,Qt()},ho))}function P(e,t,n){Ce&&(Ge.push({type:e,level:t,data:n}),Ge.length>bo*2?Qt():ee||(ee=window.setTimeout(()=>{ee=null,Qt()},ho)))}var D=null,_e=null,je=null;function sr(){D||(D={log:console.log.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),info:console.info.bind(console)},console.log=(...e)=>{let t=e.map(n=>typeof n=="object"?qe(n):String(n)).join(" ");P("LOG","log",t),D.log(...e)},console.warn=(...e)=>{let t=e.map(n=>typeof n=="object"?qe(n):String(n)).join(" ");P("WARN","warn",t),D.warn(...e)},console.error=(...e)=>{let t=e.map(n=>typeof n=="object"?qe(n):String(n)).join(" ");P("ERROR","error",t),D.error(...e)},console.info=(...e)=>{let t=e.map(n=>typeof n=="object"?qe(n):String(n)).join(" ");P("INFO","info",t),D.info(...e)})}function lr(){window.addEventListener("error",e=>{P("ERROR","error",`${e.message} at ${e.filename}:${e.lineno}`)}),window.addEventListener("unhandledrejection",e=>{P("ERROR","error",`Unhandled Rejection: ${qe(e.reason)}`)})}function cr(){if(je)return;je=window.XMLHttpRequest;let e=je;window.XMLHttpRequest=function(...t){let n=new e(...t),o="",a="",r=n.open;n.open=function(u,d,p,g,b){o=typeof d=="string"?d:d.href,a=u,r.call(n,u,d,p!==!1,g,b)};let s=n.send;return n.send=function(u){P("XHR","info",`${a} ${o}`);let d=n.onreadystatechange;return n.onreadystatechange=function(p){if(n.readyState===4){let g=n.status>=400?"error":"info";P("XHR",g,`${a} ${o} -> ${n.status}`)}d&&d.call(n,p)},s.call(n,u)},n},Object.assign(window.XMLHttpRequest,e),window.XMLHttpRequest.prototype=e.prototype}function dr(){_e||(_e=window.fetch,window.fetch=function(e,t){let n=typeof e=="string"?e:e instanceof URL?e.href:e.url||"",o=t?.method||"GET";return P("FETCH","info",`${o} ${n}`),_e.call(this,e,t).then(a=>{let r=a.ok?"info":"error";return P("FETCH",r,`${o} ${n} -> ${a.status}`),a}).catch(a=>{throw P("FETCH","error",`${o} ${n} ERROR`),a})})}function Zt(){if(Ce)return;Ce=!0,rr(),P("INFO","info","\u{1F7E2} LogView active"),sr(),lr(),cr(),dr();let e=document.createElement("style");e.id="kmod-logview-styles",e.textContent=`
        @keyframes kmodLogFade {
            from { opacity: 0; transform: translateX(10px); }
            to { opacity: 1; transform: translateX(0); }
        }
    `,document.head.appendChild(e),i.info("\u{1F4E1} LogView enabled")}function St(){if(!Ce)return;Ce=!1,ee&&(clearTimeout(ee),ee=null),Ge=[],D&&(console.log=D.log,console.warn=D.warn,console.error=D.error,console.info=D.info,D=null),_e&&(window.fetch=_e,_e=null),je&&(window.XMLHttpRequest=je,je=null),Se&&(Se.remove(),Se=null,I=null);let e=document.querySelector("#kmod-logview-styles");e&&e.remove(),i.info("\u{1F4E1} LogView disabled")}function xo(){x.getBoolean("logView")?Zt():St()}window.addEventListener("beforeunload",()=>{Ce&&St()});var vo="chatTags",yo={tags:[],enabled:!0};function Ee(){try{let e=x.get(vo);return e&&Array.isArray(e.tags)?e:yo}catch{return yo}}function Ct(e){x.set(vo,e)}function wo(e){let t=Ee();t.tags.push(e),Ct(t)}function ko(e){let t=Ee();t.tags=t.tags.filter(n=>n.id!==e),Ct(t)}function To(e,t){let n=Ee(),o=n.tags.findIndex(a=>a.id===e);o!==-1&&(n.tags[o]={...n.tags[o],...t},Ct(n))}function So(e){return Ee().tags.find(n=>n.chatName.toLowerCase()===e.toLowerCase())}function Ve(){return Ee().tags}function Co(){return Date.now().toString(36)+Math.random().toString(36).substr(2,5)}var Et=!1,pe=null,Me=null,ur=300,en=new WeakSet;function pr(){let e=[C.classes.chatItem,".wrapper.svelte-q2jdqb",".cell.svelte-q2jdqb"];for(let t of e){let n=H(t);if(n.length>0)return n}return[]}function mr(e){let t=[C.classes.chatItemTitle,".cell .title.svelte-q2jdqb .text.svelte-1riu5uh",".cell .title .text",".title .text"];for(let o of t){let a=e.querySelector(o);if(a)return a.textContent?.trim()||""}let n=e.querySelector(".title");return n&&n.textContent?.trim()||""}function fr(e){let t=[".cell .title.svelte-q2jdqb",".cell .title",".title"];for(let n of t){let o=e.querySelector(n);if(o)return o}return null}function gr(e){let t=document.createElement("span");return t.className="kmod-chat-tag",t.style.cssText=`
        display: inline-block;
        font-size: 10px;
        font-weight: 700;
        color: #fff;
        background: ${e.color};
        padding: 2px 10px;
        border-radius: 12px;
        margin-left: 8px;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        vertical-align: middle;
        line-height: 18px;
        user-select: none;
        flex-shrink: 0;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    `,t.textContent=e.tagName,t.title=`\u0422\u0435\u0433: ${e.tagName}
\u0427\u0430\u0442: ${e.chatName}`,t}function br(e){if(en.has(e))return;let t=mr(e);if(!t)return;let n=So(t);if(!n)return;let o=fr(e);if(!o||o.querySelector(".kmod-chat-tag"))return;let a=gr(n);o.appendChild(a),en.add(e),i.debug(`\u{1F3F7}\uFE0F Tag "${n.tagName}" applied to chat: ${t}`)}function tn(){let e=Ee();if(!e.enabled||e.tags.length===0)return;let t=pr();if(t.length===0)return;let n=0;for(let o of t)en.has(o)||(br(o),n++);n>0&&i.debug(`\u{1F3F7}\uFE0F Applied ${n} chat tags`)}function hr(){Me&&clearTimeout(Me),Me=window.setTimeout(()=>{Me=null,tn()},ur)}function Eo(){tn()}function Mo(){Et||(Et=!0,i.info("\u{1F3F7}\uFE0F Chat tags enabled"),tn(),pe||(pe=A(()=>{hr()})))}function Lo(){Et&&(Et=!1,pe&&(pe(),pe=null),Me&&(clearTimeout(Me),Me=null),document.querySelectorAll(".kmod-chat-tag").forEach(e=>e.remove()),i.info("\u{1F3F7}\uFE0F Chat tags disabled"))}window.addEventListener("beforeunload",()=>{pe&&(pe(),pe=null)});var Ao="templates",Fo={templates:[],enabled:!0};function nn(){try{let e=x.get(Ao);return e&&Array.isArray(e.templates)?e:Fo}catch{return Fo}}function Bo(e){x.set(Ao,e)}function Oo(e){let t=nn();t.templates.push(e),Bo(t)}function Ke(e){let t=nn();t.templates=t.templates.filter(n=>n.id!==e),Bo(t)}function me(){return nn().templates}function No(){return Date.now().toString(36)+Math.random().toString(36).substr(2,5)}var Mt=!1,tt=null,K=null,nt=null,$o="";function xr(){let e=[C.classes.composerInput,".contenteditable.svelte-1k31az8",'.composer [contenteditable="true"]','[contenteditable="true"]'];for(let t of e){let n=Mn(t);if(n)return n}return null}function yr(e,t){let n=document.querySelector(".kmod-template-confirm");n&&n.remove();let o=document.createElement("div");o.className="kmod-template-confirm",o.style.cssText=`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999999;
        backdrop-filter: blur(4px);
        animation: kmodFadeScale 0.15s ease;
    `;let a=document.createElement("div");a.style.cssText=`
        background: #313338;
        border-radius: 12px;
        padding: 32px 36px;
        max-width: 420px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0,0,0,0.6);
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: #dbdee1;
        animation: kmodFadeScale 0.15s ease;
    `;let r=document.createElement("div");r.style.cssText=`
        font-size: 18px;
        font-weight: 700;
        color: #f2f3f5;
        margin-bottom: 8px;
    `,r.textContent="\u{1F4DD} \u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D?";let s=document.createElement("div");s.style.cssText=`
        font-size: 14px;
        color: #949ba4;
        margin-bottom: 16px;
        line-height: 1.5;
    `,s.innerHTML=`
        <span style="color:#4ade80;font-weight:700;font-family:monospace;">${e.command}</span>
        <span style="color:#dbdee1;">\u2192</span>
        <span style="color:#dbdee1;">${e.text}</span>
    `;let u=document.createElement("div");u.style.cssText=`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
    `;let d=document.createElement("button");d.style.cssText=`
        padding: 8px 20px;
        border-radius: 8px;
        border: none;
        background: #4e5058;
        color: #f2f3f5;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.15s;
    `,d.textContent="\u041E\u0442\u043C\u0435\u043D\u0430",d.onmouseenter=()=>{d.style.background="#6d6f78"},d.onmouseleave=()=>{d.style.background="#4e5058"},d.onclick=()=>{o.remove(),te()};let p=document.createElement("button");p.style.cssText=`
        padding: 8px 24px;
        border-radius: 8px;
        border: none;
        background: #4ade80;
        color: #0a0a0f;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.15s;
    `,p.textContent="\u2705 \u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C",p.onmouseenter=()=>{p.style.background="#34d399"},p.onmouseleave=()=>{p.style.background="#4ade80"},p.onclick=()=>{o.remove(),t()},u.appendChild(d),u.appendChild(p),a.appendChild(r),a.appendChild(s),a.appendChild(u),o.appendChild(a),document.body.appendChild(o),o.addEventListener("click",b=>{b.target===o&&(o.remove(),te())});let g=b=>{b.key==="Escape"&&(o.remove(),te(),document.removeEventListener("keydown",g))};document.addEventListener("keydown",g)}function vr(){let e=document.createElement("div");return e.className="kmod-suggestions",e.style.cssText=`
        position: fixed;
        background: #313338;
        border-radius: 8px;
        border: 1px solid rgba(255,255,255,0.04);
        box-shadow: 0 10px 40px rgba(0,0,0,0.6);
        z-index: 999999;
        display: none;
        overflow: hidden;
        min-width: 200px;
        max-width: 380px;
        max-height: 200px;
        overflow-y: auto;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        padding: 4px 0;
    `,e.style.scrollbarWidth="thin",e.style.scrollbarColor="#1e1f22 transparent",e}function wr(e,t){if(e.innerHTML="",t.length===0){let n=document.createElement("div");n.style.cssText=`
            padding: 12px 16px;
            color: #949ba4;
            font-size: 13px;
            font-weight: 500;
            text-align: center;
        `,n.textContent="\u041D\u0435\u0442 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432",e.appendChild(n);return}for(let n of t){let o=document.createElement("div");o.style.cssText=`
            padding: 8px 16px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: background 0.15s;
            border-bottom: 1px solid rgba(255,255,255,0.03);
        `,o.onmouseenter=()=>{o.style.background="#3f4147"},o.onmouseleave=()=>{o.style.background="transparent"},o.onclick=()=>{yr(n,()=>{Tr(n)})};let a=document.createElement("span");a.style.cssText=`
            color: #4ade80;
            font-weight: 700;
            font-size: 13px;
            font-family: 'JetBrains Mono', monospace;
            flex-shrink: 0;
            background: rgba(74, 222, 128, 0.08);
            padding: 2px 8px;
            border-radius: 4px;
        `,a.textContent=n.command;let r=document.createElement("span");r.style.cssText=`
            color: #dbdee1;
            font-size: 13px;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `,r.textContent=n.text,o.appendChild(a),o.appendChild(r),e.appendChild(o)}}function kr(e,t){let n=t.getBoundingClientRect(),o=window.innerWidth,a=window.innerHeight,r=Math.min(380,o-40),s=Math.min(200,a-200),u=n.right-r-12;u<12&&(u=12);let d=n.bottom+8;d+s+20>a&&(d=n.top-s-8,d<12&&(d=12)),e.style.width=r+"px",e.style.maxHeight=Math.min(200,a-d-20)+"px",e.style.left=u+"px",e.style.top=d+"px"}function Tr(e){if(!nt)return;let t=nt;t.focus(),Sr(t);let n=new ClipboardEvent("paste",{bubbles:!0,cancelable:!0,clipboardData:new DataTransfer});n.clipboardData?.setData("text/plain",e.text),t.dispatchEvent(n),setTimeout(()=>{t.dispatchEvent(new Event("input",{bubbles:!0}))},10),te(),i.debug(`\u{1F4DD} Template inserted: ${e.command}`)}function Sr(e){let t=e.closest(".contenteditable.svelte-1k31az8")||e;t.innerHTML='<p class="paragraph" dir="auto"><br></p>',t.dispatchEvent(new Event("input",{bubbles:!0})),nt=t}function Cr(e,t){kr(e,t),e.style.display="block",nt=t}function te(){K&&(K.style.display="none",nt=null,$o="")}function Er(e){if(!e)return;let t=e.textContent||"";if(!t.startsWith("/")){te();return}let n=t.match(/^\/(\w*)/);if(!n){te();return}let a="/"+(n[1]||""),s=me().filter(u=>u.command.toLowerCase().startsWith(a.toLowerCase()));if(s.length===0){te();return}K||(K=vr(),document.body.appendChild(K)),wr(K,s),Cr(K,e),$o=a}function on(){let e=xr();e&&(e.removeEventListener("input",Io),e.addEventListener("input",Io),e.removeEventListener("blur",Ho),e.addEventListener("blur",Ho))}function Io(e){let t=e.target;t&&Er(t)}function Ho(){setTimeout(te,200)}function Ro(){x.getBoolean("templates")&&on()}function Do(){Mt||(Mt=!0,i.info("\u{1F4DD} Templates enabled"),on(),tt||(tt=A(()=>{on()})))}function Po(){Mt&&(Mt=!1,tt&&(tt(),tt=null),te(),K&&(K.remove(),K=null),i.info("\u{1F4DD} Templates disabled"))}var Le={hideStories:{key:"hideStories",default:!1,label:"hideStoriesLabel",section:"general",apply:Gn,enable:_n,disable:jn,lazy:!0},logView:{key:"logView",default:!1,label:"logViewLabel",section:"other",apply:xo,enable:Zt,disable:St,lazy:!0},hideSferum:{key:"hideSferum",default:!1,label:"hideSferumLabel",section:"general",apply:Un,enable:Wn,disable:Xn,lazy:!0},blockAnalytics:{key:"blockAnalytics",default:!1,label:"blockAnalyticsLabel",section:"security",apply:zt,enable:zt,disable:En,lazy:!1},hidePhone:{key:"hidePhone",default:!1,label:"hidePhoneLabel",section:"security",apply:Qn,enable:Zn,disable:eo,lazy:!0},showCrown:{key:"showCrown",default:!1,label:"showCrownLabel",section:"appearance",apply:On,enable:Nn,disable:In,lazy:!0},replaceTitle:{key:"replaceTitle",default:!1,label:"replaceTitleLabel",section:"appearance",apply:po,enable:mo,disable:fo,lazy:!1},showMetadata:{key:"showMetadata",default:!1,label:"showMetadataLabel",section:"media",apply:Rn,enable:Dn,disable:Pn,lazy:!0},replaceMax:{key:"replaceMax",default:!1,label:"replaceMaxLabel",section:"other",apply:oo,enable:ao,disable:ro,lazy:!0},chatTags:{key:"chatTags",default:!1,label:"chatTagsLabel",section:"chats",apply:Eo,enable:Mo,disable:Lo,lazy:!0},templates:{key:"templates",default:!1,label:"templatesLabel",section:"chats",apply:Ro,enable:Do,disable:Po,lazy:!0}},U=new Set;function zo(){for(let[e,t]of Object.entries(Le)){let n=x.getBoolean(e);if(n&&t.enable)try{t.enable(),U.add(e)}catch(o){i.error(`Failed to enable feature: ${e}`,o)}else if(!n&&t.disable&&U.has(e))try{t.disable(),U.delete(e)}catch(o){i.error(`Failed to disable feature: ${e}`,o)}}}function an(e){let t=Le[e];if(!t)return;let n=x.getBoolean(e);if(n&&t.enable){if(!U.has(e))try{t.enable(),U.add(e)}catch(o){i.error(`Failed to enable feature: ${e}`,o)}}else if(!n&&t.disable&&U.has(e))try{t.disable(),U.delete(e)}catch(o){i.error(`Failed to disable feature: ${e}`,o)}}function Lt(e){let t=Le[e];if(!t)return i.warn(`Feature not found: ${e}`),!1;let o=!x.getBoolean(e);if(x.setBoolean(e,o),o&&t.enable)try{t.enable(),U.add(e)}catch(a){i.error(`Failed to enable feature: ${e}`,a)}else if(!o&&t.disable)try{t.disable(),U.delete(e)}catch(a){i.error(`Failed to disable feature: ${e}`,a)}return o}function Ue(e){return x.getBoolean(e)}window.addEventListener("beforeunload",()=>{U.clear()});function Ft(e=24,t="currentColor",n=""){let o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("viewBox","0 0 24 24"),o.setAttribute("width",String(e)),o.setAttribute("height",String(e)),o.setAttribute("fill","none"),o.setAttribute("stroke",t),o.setAttribute("stroke-width","2"),o.setAttribute("stroke-linecap","round"),o.setAttribute("stroke-linejoin","round"),o.classList.add("kmod-icon","kmod-icon-settings"),n&&o.classList.add(n);let a=["M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z","M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"];for(let s of a){let u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d",s),o.appendChild(u)}let r=document.createElementNS("http://www.w3.org/2000/svg","style");return r.textContent=`
    .kmod-icon-settings {
      transition: transform 0.3s ease, stroke 0.3s ease;
      transform-origin: center;
    }
    .kmod-icon-settings:hover {
      transform: rotate(60deg) scale(1.1);
      stroke: #ffd700;
    }
    /* AFK-\u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044F (\u043F\u0443\u043B\u044C\u0441\u0430\u0446\u0438\u044F) \u2014 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432\u0441\u0435\u0433\u0434\u0430, \u0435\u0441\u043B\u0438 \u043D\u0435 \u043D\u0430\u0432\u0435\u0434\u0451\u043D */
    .kmod-icon-settings:not(:hover) {
      animation: kmod-icon-pulse 3s ease-in-out infinite;
    }
    @keyframes kmod-icon-pulse {
      0% { opacity: 0.85; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
      100% { opacity: 0.85; transform: scale(1); }
    }
  `,o.appendChild(r),o}function qo(e=24,t="currentColor",n=""){let o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("viewBox","0 0 24 24"),o.setAttribute("width",String(e)),o.setAttribute("height",String(e)),o.setAttribute("fill","none"),o.setAttribute("stroke",t),o.setAttribute("stroke-width","2"),o.setAttribute("stroke-linecap","round"),o.setAttribute("stroke-linejoin","round"),o.classList.add("kmod-icon","kmod-icon-chevron"),n&&o.classList.add(n);let a=document.createElementNS("http://www.w3.org/2000/svg","polyline");a.setAttribute("points","9 18 15 12 9 6"),o.appendChild(a);let r=document.createElementNS("http://www.w3.org/2000/svg","style");return r.textContent=`
    .kmod-icon-chevron {
      transition: transform 0.3s ease, stroke 0.3s ease;
    }
    .kmod-icon-chevron:hover {
      transform: translateX(4px);
      stroke: #ffd700;
    }
    .kmod-icon-chevron:not(:hover) {
      animation: kmod-icon-float 4s ease-in-out infinite;
    }
    @keyframes kmod-icon-float {
      0% { transform: translateX(0); }
      50% { transform: translateX(2px); }
      100% { transform: translateX(0); }
    }
  `,o.appendChild(r),o}var Fe=null,rn=new Set;function ot(e){return[...xe.system,...xe.google].find(n=>n.label===e)}function Mr(e){return!("url"in e)||!e.url||rn.has(e.label)?Promise.resolve():new Promise(t=>{try{if(document.querySelector(`link[href="${e.url}"]`)){rn.add(e.label),t();return}let o=document.createElement("link");o.rel="stylesheet",o.href=e.url,o.onload=()=>{rn.add(e.label),i.debug(`\u{1F4E5} Google Font loaded: ${e.label}`),t()},o.onerror=()=>{i.warn(`\u26A0\uFE0F Failed to load Google Font: ${e.label}`),t()},document.head.appendChild(o)}catch(n){i.error(`Error loading font ${e.label}:`,n),t()}})}async function Go(e,t){if(Fe&&(Fe.remove(),Fe=null),!e||e===""){document.body.style.fontFamily="";return}if(t){let n=ot(t);n&&"url"in n&&n.url&&await Mr(n)}Fe=document.createElement("style"),Fe.id="kmod-font-style",Fe.textContent=`
        * {
            font-family: ${e} !important;
        }
    `,document.head.appendChild(Fe),i.debug(`\u{1F524} Font applied: ${e}`)}async function _o(){let e=x.get("fontFamily");if(e){let t=ot(e);t&&await Go(t.value,e)}}async function jo(e){let t=ot(e);if(!t){i.warn(`Font not found: ${e}`);return}x.set("fontFamily",e),await Go(t.value,e)}var sn=[...xe.system,...xe.google],At=xe.system,Bt=xe.google;var at=null,ln=["#ef4444","#f59e0b","#22c55e","#3b82f6","#8b5cf6","#ec4899","#14b8a6","#f97316","#6366f1","#84cc16"];function Lr(){return ln[Math.floor(Math.random()*ln.length)]}function Vo(){at&&(at.remove(),at=null);let e=document.createElement("div");e.className="kmod-tag-manager-overlay",e.style.cssText=`
        position: fixed;
        inset: 0;
        background: rgba(10, 10, 15, 0.85);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999999;
        backdrop-filter: blur(8px);
        animation: kmodFadeScale 0.2s ease;
    `;let t=document.createElement("div");t.style.cssText=`
        background: #0a0a0f;
        border-radius: 24px;
        padding: 32px;
        max-width: 600px;
        width: 92%;
        max-height: 80vh;
        overflow-y: auto;
        border: 1px solid rgba(255,255,255,0.04);
        box-shadow: 0 40px 120px rgba(0,0,0,0.8);
        color: #f0f0f0;
        font-family: 'Inter', -apple-system, sans-serif;
    `;let n=document.createElement("div");n.style.cssText=`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
    `;let o=document.createElement("h2");o.style.cssText=`
        font-size: 24px;
        font-weight: 900;
        margin: 0;
        letter-spacing: -0.5px;
    `,o.textContent="\u{1F3F7}\uFE0F \u0422\u0435\u0433\u0438 \u0447\u0430\u0442\u043E\u0432";let a=document.createElement("button");a.style.cssText=`
        background: transparent;
        border: 1px solid rgba(255,255,255,0.06);
        color: rgba(255,255,255,0.3);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        transition: all 0.2s;
    `,a.textContent="\u2715",a.onclick=()=>{e.remove(),at=null},n.appendChild(o),n.appendChild(a),t.appendChild(n);let r=document.createElement("div");r.style.cssText=`
        margin-bottom: 20px;
        max-height: 300px;
        overflow-y: auto;
    `,r.id="kmod-tag-list";let s=document.createElement("button");s.style.cssText=`
        background: rgba(255,255,255,0.06);
        border: 1px dashed rgba(255,255,255,0.15);
        color: rgba(255,255,255,0.5);
        padding: 12px 20px;
        border-radius: 12px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        width: 100%;
        transition: all 0.2s;
    `,s.textContent="+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0433",s.onmouseenter=()=>{s.style.background="rgba(255,255,255,0.08)",s.style.borderColor="rgba(255,255,255,0.25)"},s.onmouseleave=()=>{s.style.background="rgba(255,255,255,0.06)",s.style.borderColor="rgba(255,255,255,0.15)"},s.onclick=()=>{let u=t.querySelector(".kmod-tag-form");u&&u.remove();let d=Ko(null,()=>{Ot(r)});t.insertBefore(d,s)},t.appendChild(r),t.appendChild(s),e.appendChild(t),document.body.appendChild(e),at=e,Ot(r)}function Ot(e){let t=Ve();if(e.innerHTML="",t.length===0){let n=document.createElement("div");n.style.cssText=`
            text-align: center;
            color: rgba(255,255,255,0.2);
            padding: 40px 0;
            font-size: 14px;
        `,n.textContent="\u041D\u0435\u0442 \u0442\u0435\u0433\u043E\u0432. \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u0439!",e.appendChild(n);return}for(let n of t){let o=document.createElement("div");o.style.cssText=`
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 16px;
            margin-bottom: 8px;
            background: rgba(255,255,255,0.02);
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.03);
            transition: all 0.2s;
        `,o.onmouseenter=()=>{o.style.background="rgba(255,255,255,0.04)"},o.onmouseleave=()=>{o.style.background="rgba(255,255,255,0.02)"};let a=document.createElement("div");a.style.cssText=`
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
            min-width: 0;
        `;let r=document.createElement("span");r.style.cssText=`
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: ${n.color};
            flex-shrink: 0;
        `;let s=document.createElement("div");s.style.cssText=`
            display: flex;
            flex-direction: column;
            min-width: 0;
        `;let u=document.createElement("span");u.style.cssText=`
            font-weight: 700;
            font-size: 14px;
            color: #f0f0f0;
        `,u.textContent=n.tagName;let d=document.createElement("span");d.style.cssText=`
            font-size: 12px;
            color: rgba(255,255,255,0.3);
        `,d.textContent=`\u0427\u0430\u0442: ${n.chatName}`,s.appendChild(u),s.appendChild(d),a.appendChild(r),a.appendChild(s);let p=document.createElement("div");p.style.cssText=`
            display: flex;
            gap: 6px;
        `;let g=document.createElement("button");g.style.cssText=`
            background: transparent;
            border: none;
            color: rgba(255,255,255,0.2);
            cursor: pointer;
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 12px;
            transition: all 0.2s;
        `,g.textContent="\u270F\uFE0F",g.onmouseenter=()=>{g.style.color="rgba(255,255,255,0.6)"},g.onmouseleave=()=>{g.style.color="rgba(255,255,255,0.2)"},g.onclick=()=>{let c=e.closest(".kmod-tag-manager-overlay")?.querySelector(".kmod-tag-form");c&&c.remove();let l=Ko(n,()=>{Ot(e)}),m=e.closest(".kmod-tag-manager-overlay")?.querySelector("button:last-child");m?m.parentNode?.insertBefore(l,m):e.parentNode?.appendChild(l)};let b=document.createElement("button");b.style.cssText=`
            background: transparent;
            border: none;
            color: rgba(255,255,255,0.2);
            cursor: pointer;
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 12px;
            transition: all 0.2s;
        `,b.textContent="\u{1F5D1}\uFE0F",b.onmouseenter=()=>{b.style.color="#ef4444"},b.onmouseleave=()=>{b.style.color="rgba(255,255,255,0.2)"},b.onclick=()=>{confirm(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0435\u0433 "${n.tagName}"?`)&&(ko(n.id),Ot(e))},p.appendChild(g),p.appendChild(b),o.appendChild(a),o.appendChild(p),e.appendChild(o)}}function Ko(e,t){let n=document.createElement("div");n.className="kmod-tag-form",n.style.cssText=`
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 12px;
        padding: 16px;
        margin-bottom: 16px;
    `;let o=e!==null,a=`
        width: 100%;
        padding: 10px 14px;
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 8px;
        color: #f0f0f0;
        font-size: 14px;
        outline: none;
        box-sizing: border-box;
        transition: border-color 0.2s;
        margin-bottom: 10px;
    `,r=`
        display: block;
        font-size: 12px;
        font-weight: 600;
        color: rgba(255,255,255,0.3);
        margin-bottom: 4px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    `,s=document.createElement("label");s.style.cssText=r,s.textContent="\u0418\u043C\u044F \u0447\u0430\u0442\u0430",n.appendChild(s);let u=document.createElement("input");u.type="text",u.placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0410\u043D\u043D\u0430",u.style.cssText=a,o&&(u.value=e.chatName),n.appendChild(u);let d=document.createElement("label");d.style.cssText=r,d.textContent="\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u0433\u0430",n.appendChild(d);let p=document.createElement("input");p.type="text",p.placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0420\u0430\u0431\u043E\u0442\u0430",p.style.cssText=a,o&&(p.value=e.tagName),n.appendChild(p);let g=document.createElement("label");g.style.cssText=r,g.textContent="\u0426\u0432\u0435\u0442",n.appendChild(g);let b=document.createElement("div");b.style.cssText=`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-bottom: 12px;
    `;let c=o?e.color:Lr();for(let f of ln){let S=document.createElement("button");S.style.cssText=`
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: ${f};
            border: 2px solid ${f===c?"rgba(255,255,255,0.5)":"transparent"};
            cursor: pointer;
            transition: all 0.2s;
            padding: 0;
        `,S.onclick=()=>{b.querySelectorAll("button").forEach(M=>{M.style.borderColor="transparent"}),S.style.borderColor="rgba(255,255,255,0.5)",l.value=f},f===c&&(S.style.borderColor="rgba(255,255,255,0.5)"),b.appendChild(S)}let l=document.createElement("input");l.type="hidden",l.value=c,n.appendChild(b),n.appendChild(l);let m=document.createElement("div");m.style.cssText=`
        display: flex;
        gap: 8px;
        margin-top: 4px;
    `;let y=document.createElement("button");y.style.cssText=`
        flex: 1;
        padding: 10px;
        background: #4ade80;
        border: none;
        border-radius: 8px;
        color: #0a0a0f;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s;
    `,y.textContent=o?"\u{1F4BE} \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C":"\u2795 \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",y.onmouseenter=()=>{y.style.background="#34d399"},y.onmouseleave=()=>{y.style.background="#4ade80"},y.onclick=()=>{let f=u.value.trim(),S=p.value.trim(),M=l.value;if(!f||!S){alert("\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F!");return}o?To(e.id,{chatName:f,tagName:S,color:M}):wo({id:Co(),chatName:f,tagName:S,color:M,createdAt:Date.now()}),n.remove(),t()};let h=document.createElement("button");return h.style.cssText=`
        padding: 10px 20px;
        background: transparent;
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 8px;
        color: rgba(255,255,255,0.3);
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s;
    `,h.textContent="\u041E\u0442\u043C\u0435\u043D\u0430",h.onmouseenter=()=>{h.style.color="rgba(255,255,255,0.6)"},h.onmouseleave=()=>{h.style.color="rgba(255,255,255,0.3)"},h.onclick=()=>{n.remove()},m.appendChild(y),m.appendChild(h),n.appendChild(m),n}var Fr=200,Uo=["general","security","appearance","media","other","chats"];function Ar(e){let t={general:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',security:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',appearance:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 2a10 10 0 0 0 0 20"/><path d="M2 12h20"/></svg>',media:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',other:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H5.78a1.65 1.65 0 0 0-1.51 1 1.65 1.65 0 0 0 .33 1.82l.56.56a1.65 1.65 0 0 0 2.33 0l.56-.56a1.65 1.65 0 0 0 2.33 0l.56.56a1.65 1.65 0 0 0 2.33 0l.56-.56a1.65 1.65 0 0 0 2.33 0l.56.56a1.65 1.65 0 0 0 2.33 0z"/></svg>',language:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',about:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',chats:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>'};return t[e]||t.other}var Br=`
@keyframes kmodFadeScale{from{opacity:0;transform:scale(.97) translateY(6px)}to{opacity:1;transform:scale(1) translateY(0)}}
.kmod-settings-overlay{position:fixed;inset:0;background:rgba(10,10,15,0.85);display:flex;justify-content:center;align-items:center;z-index:999999;animation:kmodFadeScale ${Fr}ms ease;backdrop-filter:blur(4px)}
.kmod-settings-window{background:#0a0a0f;border-radius:24px;box-shadow:0 40px 120px rgba(0,0,0,0.8);width:92%;max-width:800px;height:88vh;max-height:720px;display:flex;flex-direction:column;overflow:hidden;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#f0f0f0;border:1px solid rgba(255,255,255,0.04)}
.kmod-settings-header{display:flex;justify-content:space-between;align-items:center;padding:24px 28px;background:#0f0f1a;border-bottom:1px solid rgba(255,255,255,0.04);flex-shrink:0}
.kmod-settings-header h2{font-size:28px;font-weight:900;color:#fff;margin:0;display:flex;align-items:center;gap:12px;letter-spacing:-1px}
.kmod-settings-header h2 .gear{color:rgba(255,255,255,0.3);display:flex;align-items:center}
.kmod-settings-header h2 .gear svg{width:24px;height:24px}
.kmod-settings-close{background:transparent;border:1px solid rgba(255,255,255,0.06);color:rgba(255,255,255,0.3);font-size:20px;cursor:pointer;width:40px;height:40px;border-radius:60px;transition:all .2s;display:flex;align-items:center;justify-content:center}
.kmod-settings-close:hover{color:#fff;border-color:rgba(255,255,255,0.15);transform:scale(1.04)}
.kmod-settings-body{display:flex;flex:1;overflow:hidden;background:#0a0a0f}
.kmod-settings-sidebar{width:200px;min-width:160px;background:#0f0f1a;padding:16px 10px;overflow-y:auto;flex-shrink:0;border-right:1px solid rgba(255,255,255,0.03)}
.kmod-settings-sidebar::-webkit-scrollbar{width:3px}
.kmod-settings-sidebar::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.06);border-radius:10px}
.kmod-sidebar-item{display:flex;align-items:center;gap:14px;padding:10px 16px;border-radius:12px;cursor:pointer;color:rgba(255,255,255,0.3);font-size:15px;font-weight:700;transition:all .2s;letter-spacing:-0.2px}
.kmod-sidebar-item:hover{color:rgba(255,255,255,0.7);background:rgba(255,255,255,0.03)}
.kmod-sidebar-item.active{color:#fff;background:rgba(255,255,255,0.06)}
.kmod-sidebar-item .icon{width:20px;height:20px;flex-shrink:0;display:flex;align-items:center;justify-content:center}
.kmod-settings-content{flex:1;padding:24px 28px 20px;overflow-y:auto;background:#0a0a0f}
.kmod-settings-content::-webkit-scrollbar{width:3px}
.kmod-settings-content::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.06);border-radius:10px}
.kmod-settings-section{display:none}
.kmod-settings-section.active{display:block}
.kmod-settings-section .section-header{margin-bottom:24px}
.kmod-settings-section .section-header h3{font-size:22px;font-weight:900;color:#fff;margin:0 0 4px;letter-spacing:-0.5px}
.kmod-settings-section .section-header .subtitle{font-size:14px;color:rgba(255,255,255,0.2);margin:0;font-weight:600;letter-spacing:0.3px;text-transform:uppercase}
.kmod-feature-item{display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.03);gap:16px}
.kmod-feature-item:last-child{border-bottom:none}
.kmod-feature-item .info{flex:1;min-width:0}
.kmod-feature-item .info .label{font-size:16px;font-weight:700;color:#f0f0f0;letter-spacing:-0.2px}
.kmod-feature-item .info .desc{font-size:13px;color:rgba(255,255,255,0.25);margin-top:2px;line-height:1.4;font-weight:500}
.kmod-feature-item .status-badge{font-size:11px;font-weight:700;color:rgba(255,255,255,0.2);flex-shrink:0;min-width:40px;text-align:right;letter-spacing:0.5px;text-transform:uppercase}
.kmod-feature-item .status-badge.on{color:#4ade80}
.kmod-feature-item .status-badge.off{color:#ed4245}
.kmod-switch{position:relative;width:44px;height:26px;background:rgba(255,255,255,0.06);border-radius:40px;cursor:pointer;transition:background .25s;flex-shrink:0;border:none;padding:0;outline:0}
.kmod-switch.active{background:#4ade80}
.kmod-switch::after{content:'';position:absolute;top:3px;left:3px;width:20px;height:20px;background:#fff;border-radius:50%;transition:transform .25s cubic-bezier(0.34,1.56,0.64,1);box-shadow:0 2px 8px rgba(0,0,0,0.3)}
.kmod-switch.active::after{transform:translateX(18px)}
.kmod-switch:hover{filter:brightness(1.1)}
.kmod-language-row{display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.03);gap:16px}
.kmod-language-row label{font-size:16px;font-weight:700;color:#f0f0f0;letter-spacing:-0.2px}
.kmod-language-row select{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:8px 16px;font-size:15px;font-weight:700;color:#f0f0f0;cursor:pointer;outline:0;min-width:140px;transition:border-color .2s}
.kmod-language-row select:focus{border-color:rgba(255,255,255,0.15)}
.kmod-about-content{padding:4px 0}
.kmod-about-content .name{font-size:28px;font-weight:900;color:#fff;letter-spacing:-1px}
.kmod-about-content .version{font-size:15px;color:rgba(255,255,255,0.2);margin-top:2px;font-weight:600;text-transform:uppercase;letter-spacing:1px}
.kmod-about-content .author{font-size:15px;color:rgba(255,255,255,0.15);margin-top:2px;font-weight:600}
.kmod-about-content .desc{font-size:15px;color:rgba(255,255,255,0.2);margin-top:12px;line-height:1.6;font-weight:500}
.kmod-about-divider{height:1px;background:rgba(255,255,255,0.04);margin:12px 0}
.kmod-settings-footer{display:flex;justify-content:space-between;align-items:center;padding:16px 28px;background:#0f0f1a;border-top:1px solid rgba(255,255,255,0.04);flex-shrink:0}
.kmod-settings-footer .status{font-size:12px;color:#4ade80;font-weight:700;display:flex;align-items:center;gap:8px;letter-spacing:0.5px;text-transform:uppercase}
.kmod-settings-footer .status .dot{width:8px;height:8px;border-radius:50%;background:#4ade80;display:inline-block;box-shadow:0 0 20px rgba(74,222,128,0.3)}
.kmod-settings-footer .actions{display:flex;gap:10px}
.kmod-settings-footer .actions button{padding:8px 20px;border-radius:60px;font-size:13px;font-weight:700;cursor:pointer;transition:all .2s;border:none;background:transparent;color:rgba(255,255,255,0.3);letter-spacing:0.3px}
.kmod-settings-footer .actions .btn-reset:hover{color:#ed4245;background:rgba(237,66,69,0.08)}
.kmod-settings-footer .actions .btn-close{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.5);border:1px solid rgba(255,255,255,0.04)}
.kmod-settings-footer .actions .btn-close:hover{background:rgba(255,255,255,0.1);color:#fff;transform:scale(1.02)}
.kmod-font-select-wrapper{display:flex;align-items:center;margin-left:12px}
.kmod-font-select{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:6px 14px;color:#f0f0f0;font-size:14px;font-weight:600;cursor:pointer;outline:0;transition:border-color .2s;min-width:140px}
.kmod-font-select:focus{border-color:rgba(255,255,255,0.15)}
.kmod-font-select option{background:#0a0a0f;color:#f0f0f0}
.kmod-chats-section-btn{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);color:#f0f0f0;padding:14px 24px;border-radius:12px;cursor:pointer;font-size:15px;font-weight:700;transition:all 0.2s;width:100%;letter-spacing:-0.2px}
.kmod-chats-section-btn:hover{background:rgba(255,255,255,0.1);transform:scale(1.01)}
.kmod-tags-preview{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px;padding:12px 16px;background:rgba(255,255,255,0.02);border-radius:12px;border:1px solid rgba(255,255,255,0.03);min-height:40px;align-items:center}
.kmod-tag-preview-item{display:inline-block;color:#fff;font-size:11px;font-weight:700;padding:2px 12px;border-radius:12px;margin:2px 0}
.kmod-template-item{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:rgba(255,255,255,0.02);border-radius:8px;margin-bottom:4px;border:1px solid rgba(255,255,255,0.03)}
.kmod-template-command{color:#4ade80;font-weight:700;font-size:13px;font-family:monospace}
.kmod-template-text{color:rgba(255,255,255,0.5);font-size:13px;flex:1;margin-left:12px}
.kmod-template-delete{background:transparent;border:none;color:rgba(255,255,255,0.2);cursor:pointer;font-size:14px;transition:all 0.2s;padding:4px 8px;border-radius:6px}
.kmod-template-delete:hover{color:#ed4245;background:rgba(237,66,69,0.1)}
.kmod-template-form{display:none;gap:8px;flex-wrap:wrap;margin-bottom:8px;padding:12px;background:rgba(255,255,255,0.02);border-radius:10px;border:1px solid rgba(255,255,255,0.04)}
@media (max-width:640px){.kmod-settings-window{height:95vh;max-height:none;border-radius:16px;width:98%}.kmod-settings-sidebar{width:52px;min-width:52px;padding:10px 6px}.kmod-sidebar-item .label{display:none}.kmod-sidebar-item{justify-content:center;padding:10px;border-radius:10px}.kmod-settings-content{padding:16px 18px}.kmod-feature-item{flex-wrap:wrap;gap:4px}.kmod-feature-item .status-badge{text-align:left;min-width:auto}.kmod-settings-header h2{font-size:20px}.kmod-language-row{flex-direction:column;align-items:flex-start;gap:8px}.kmod-language-row select{width:100%}.kmod-settings-footer{flex-wrap:wrap;gap:8px;padding:14px 18px}.kmod-font-select-wrapper{width:100%;margin-left:0;margin-top:6px}.kmod-font-select{width:100%}}
`,We={general:{icon:"general",key:"sectionGeneral"},security:{icon:"security",key:"sectionSecurity"},appearance:{icon:"appearance",key:"sectionAppearance"},media:{icon:"media",key:"sectionMedia"},other:{icon:"other",key:"sectionOther"},language:{icon:"language",key:"sectionLanguage"},about:{icon:"about",key:"sectionAbout"},chats:{icon:"chats",key:"sectionChats"}},Or={hideStories:"general",hideSferum:"general",blockAnalytics:"security",hidePhone:"security",showCrown:"appearance",replaceTitle:"appearance",showMetadata:"media",replaceMax:"other",logView:"other"};function Nr(){if(!document.querySelector("#kmod-settings-styles")){let e=document.createElement("style");e.id="kmod-settings-styles",e.textContent=Br,document.head.appendChild(e)}}function Ir(e,t){let n=document.createElement("button");return n.className=`kmod-switch${e?" active":""}`,n.type="button",n.setAttribute("role","switch"),n.setAttribute("aria-checked",String(e)),n.addEventListener("click",o=>{o.stopPropagation(),t()}),n}function Xo(e){let t=e.querySelectorAll("[data-i18n]");for(let n of t){let o=n.getAttribute("data-i18n");if(o){let a=v(o);a&&(n.textContent=a)}}}function Hr(e,t){let n=Ue(e),o=v(t.label),a=t.label.replace(/Label$/,"")+"Desc",r=v(a),s=document.createElement("div");s.className="kmod-feature-item";let u=document.createElement("div");u.className="info";let d=document.createElement("div");if(d.className="label",d.textContent=o,u.appendChild(d),r&&r!==a){let c=document.createElement("div");c.className="desc",c.textContent=r,u.appendChild(c)}s.appendChild(u);let p=document.createElement("span");p.className=`status-badge ${n?"on":"off"}`,p.textContent=n?v("statusEnabled"):v("statusDisabled"),s.appendChild(p);let g=document.createElement("div"),b=Ir(n,()=>{Lt(e);let c=Ue(e);p.textContent=c?v("statusEnabled"):v("statusDisabled"),p.className=`status-badge ${c?"on":"off"}`;let l=g.querySelector(".kmod-switch");l&&(l.className=`kmod-switch${c?" active":""}`,l.setAttribute("aria-checked",String(c))),c&&t.enable?t.enable():t.disable&&t.disable()});return g.appendChild(b),s.appendChild(g),s}function $r(){let e=document.createElement("div");e.className="kmod-feature-item",e.style.borderTop="1px solid rgba(255,255,255,0.06)",e.style.marginTop="8px",e.style.paddingTop="12px",e.style.flexWrap="wrap";let t=document.createElement("div");t.className="info",t.style.flex="1",t.style.minWidth="150px";let n=document.createElement("div");n.className="label",n.setAttribute("data-i18n","fontFamilyLabel"),n.textContent=v("fontFamilyLabel"),t.appendChild(n);let o=document.createElement("div");o.className="desc",o.setAttribute("data-i18n","fontFamilyDesc"),o.textContent=v("fontFamilyDesc"),t.appendChild(o),e.appendChild(t);let a=document.createElement("div");a.className="kmod-font-select-wrapper",a.style.display="flex",a.style.alignItems="center",a.style.marginLeft="12px",a.style.flex="1",a.style.minWidth="180px";let r=document.createElement("select");r.className="kmod-font-select",r.style.width="100%";let s=x.get("fontFamily")||(sn.length>0?sn[0].label:"Inter"),u=[{label:"\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435",fonts:At},{label:"Google Fonts",fonts:Bt}];for(let p of u){let g=document.createElement("optgroup");g.label=p.label;for(let b of p.fonts){let c=document.createElement("option");c.value=b.label;let l=`fontFamily${b.label.replace(/[^a-zA-Z]/g,"")}`,m=v(l);c.textContent=m&&m!==l?m:b.label,b.label===s&&(c.selected=!0),g.appendChild(c)}r.appendChild(g)}let d=document.createElement("span");return d.style.cssText=`
        margin-left: 10px;
        font-size: 12px;
        color: rgba(255,255,255,0.2);
        font-weight: 600;
        display: none;
    `,d.textContent="\u23F3 \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",r.addEventListener("change",async()=>{let p=r.value,g=ot(p);g&&"url"in g&&(d.style.display="inline",d.textContent="\u23F3 \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");try{await jo(p),g&&"url"in g&&(d.textContent="\u2705 \u0413\u043E\u0442\u043E\u0432\u043E",setTimeout(()=>{d.style.display="none"},1500))}catch{d.textContent="\u274C \u041E\u0448\u0438\u0431\u043A\u0430",setTimeout(()=>{d.style.display="none"},2e3)}}),a.appendChild(r),a.appendChild(d),e.appendChild(a),e}function Rr(){let e=document.createElement("div");e.className="kmod-settings-section",e.dataset.section="chats";let t=document.createElement("div");t.className="section-header";let n=document.createElement("h3");n.setAttribute("data-i18n","sectionChats"),n.textContent=v("sectionChats"),t.appendChild(n);let o=document.createElement("p");o.className="subtitle",o.setAttribute("data-i18n","sectionChatsDesc"),o.textContent=v("sectionChatsDesc"),t.appendChild(o),e.appendChild(t);let a=document.createElement("div");a.style.cssText="font-size:14px;font-weight:700;color:#f0f0f0;margin:12px 0 6px;",a.textContent="\u{1F3F7}\uFE0F \u0422\u0435\u0433\u0438 \u0434\u043B\u044F \u0447\u0430\u0442\u043E\u0432",e.appendChild(a);let r=document.createElement("button");r.style.cssText=`
        background: rgba(74,222,128,0.08);
        border: 1px solid rgba(74,222,128,0.15);
        color: #4ade80;
        padding: 10px 18px;
        border-radius: 10px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 700;
        width: 100%;
        transition: all 0.2s;
    `,r.textContent="\u{1F3F7}\uFE0F \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u0433\u0430\u043C\u0438",r.onclick=()=>Vo(),e.appendChild(r);let s=document.createElement("div");s.className="kmod-tags-preview",(()=>{let k=Ve();if(s.innerHTML="",k.length===0){s.innerHTML='<span style="color:rgba(255,255,255,0.2);font-size:13px;">\u041D\u0435\u0442 \u0442\u0435\u0433\u043E\u0432</span>';return}k.forEach(T=>{let w=document.createElement("span");w.className="kmod-tag-preview-item",w.style.backgroundColor=T.color,w.textContent=T.tagName,s.appendChild(w)})})(),e.appendChild(s);let d=document.createElement("hr");d.style.cssText="border:none;border-top:1px solid rgba(255,255,255,0.04);margin:8px 0 12px;",e.appendChild(d);let p=document.createElement("div");p.style.cssText="font-size:14px;font-weight:700;color:#f0f0f0;margin-bottom:2px;",p.textContent="\u{1F4DD} \u0428\u0430\u0431\u043B\u043E\u043D\u044B \u043E\u0442\u0432\u0435\u0442\u043E\u0432",e.appendChild(p);let g=document.createElement("p");g.style.cssText="font-size:12px;color:rgba(255,255,255,0.25);margin:0 0 8px;",g.textContent="\u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u0447\u0435\u0440\u0435\u0437 /\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0432 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430",e.appendChild(g);let b=document.createElement("div");b.id="kmod-templates-list",b.style.cssText="margin-bottom:8px;max-height:150px;overflow-y:auto;";let c=()=>{let k=me();if(b.innerHTML="",k.length===0){b.innerHTML='<div style="text-align:center;color:rgba(255,255,255,0.15);padding:8px 0;font-size:13px;">\u041D\u0435\u0442 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432</div>';return}k.forEach(T=>{let w=document.createElement("div");w.className="kmod-template-item",w.innerHTML=`
                <span class="kmod-template-command">${T.command}</span>
                <span class="kmod-template-text">${T.text}</span>
                <button class="kmod-template-delete" data-id="${T.id}">\u2715</button>
            `,w.querySelector(".kmod-template-delete")?.addEventListener("click",()=>{confirm(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D "${T.command}"?`)&&(Ke(T.id),c())}),b.appendChild(w)})};c(),e.appendChild(b);let l=document.createElement("div");l.className="kmod-template-form",l.style.display="none";let m=document.createElement("input");m.placeholder="/\u043A\u043E\u043C\u0430\u043D\u0434\u0430",m.style.cssText=`
        flex:1;min-width:100px;padding:8px 12px;background:rgba(255,255,255,0.04);
        border:1px solid rgba(255,255,255,0.06);border-radius:8px;color:#f0f0f0;font-size:13px;outline:none;
    `,l.appendChild(m);let y=document.createElement("input");y.placeholder="\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0432\u0435\u0442\u0430",y.style.cssText=`
        flex:2;min-width:150px;padding:8px 12px;background:rgba(255,255,255,0.04);
        border:1px solid rgba(255,255,255,0.06);border-radius:8px;color:#f0f0f0;font-size:13px;outline:none;
    `,l.appendChild(y);let h=document.createElement("div");h.style.cssText="display:flex;gap:8px;width:100%;";let f=document.createElement("button");f.textContent="\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",f.style.cssText="flex:1;padding:8px 16px;background:#4ade80;border:none;border-radius:8px;color:#0a0a0f;font-weight:700;font-size:13px;cursor:pointer;",f.onclick=()=>{let k=m.value.trim(),T=y.value.trim();if(!k||!T){alert("\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043E\u0431\u0430 \u043F\u043E\u043B\u044F");return}if(!k.startsWith("/")){alert("\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 /");return}Oo({id:No(),command:k,text:T,createdAt:Date.now()}),m.value="",y.value="",l.style.display="none",c()},h.appendChild(f);let S=document.createElement("button");S.textContent="\u041E\u0442\u043C\u0435\u043D\u0430",S.style.cssText="padding:8px 16px;background:transparent;border:1px solid rgba(255,255,255,0.06);border-radius:8px;color:rgba(255,255,255,0.3);font-weight:600;font-size:13px;cursor:pointer;",S.onclick=()=>{l.style.display="none",m.value="",y.value=""},h.appendChild(S),l.appendChild(h),e.appendChild(l);let M=document.createElement("button");return M.textContent="+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D",M.style.cssText=`
        background:rgba(255,255,255,0.04);border:1px dashed rgba(255,255,255,0.1);
        color:rgba(255,255,255,0.3);padding:8px 16px;border-radius:8px;cursor:pointer;
        font-size:13px;font-weight:600;width:100%;transition:all 0.2s;
    `,M.onclick=()=>{l.style.display=l.style.display==="none"?"flex":"none",l.style.display==="flex"&&m.focus()},e.appendChild(M),e}function Dr(e){if(e==="chats")return Rr();let t=document.createElement("div");t.className=`kmod-settings-section${e==="general"?" active":""}`,t.dataset.section=e;let n=document.createElement("div");n.className="section-header";let o=document.createElement("h3");o.setAttribute("data-i18n",We[e]?.key||""),o.textContent=v(We[e]?.key||""),n.appendChild(o);let a=(We[e]?.key||"")+"Desc",r=v(a);if(r&&r!==String(a)){let d=document.createElement("p");d.className="subtitle",d.setAttribute("data-i18n",a),d.textContent=r,n.appendChild(d)}t.appendChild(n);let s=document.createElement("div");s.className="kmod-features-list";let u=Object.entries(Le).filter(([d])=>Or[d]===e);for(let[d,p]of u)s.appendChild(Hr(d,p));if(t.appendChild(s),e==="appearance"){let d=$r();t.appendChild(d)}return t}function Pr(){let e=document.createElement("div");e.className="kmod-settings-section",e.dataset.section="language";let t=document.createElement("div");t.className="section-header";let n=document.createElement("h3");n.setAttribute("data-i18n","sectionLanguage"),n.textContent=v("sectionLanguage"),t.appendChild(n);let o=document.createElement("p");o.className="subtitle",o.setAttribute("data-i18n","sectionLanguageDesc"),o.textContent=v("sectionLanguageDesc"),t.appendChild(o),e.appendChild(t);let a=document.createElement("div");a.className="kmod-language-row";let r=document.createElement("label");r.setAttribute("data-i18n","languageLabel"),r.textContent=v("languageLabel"),a.appendChild(r);let s=document.createElement("select"),u=document.createElement("option");u.value="ru",u.textContent=v("languageRu"),s.appendChild(u);let d=document.createElement("option");return d.value="en",d.textContent=v("languageEn"),s.appendChild(d),s.value=Rt(),s.addEventListener("change",()=>{let p=s.value;$t(p);let g=e.closest(".kmod-settings-window");g&&Xo(g);let b=g?.querySelectorAll(".kmod-feature-item");if(b)for(let y of b){let h=y.querySelector(".status-badge"),f=y.querySelector(".kmod-switch");if(h&&f){let S=f.classList.contains("active");h.textContent=S?v("statusEnabled"):v("statusDisabled"),h.className=`status-badge ${S?"on":"off"}`}}let c=g?.querySelector(".kmod-font-select");if(c){let y=c.value;c.innerHTML="";let h=[{label:"\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435",fonts:At},{label:"Google Fonts",fonts:Bt}];for(let f of h){let S=document.createElement("optgroup");S.label=f.label;for(let M of f.fonts){let k=document.createElement("option");k.value=M.label;let T=`fontFamily${M.label.replace(/[^a-zA-Z]/g,"")}`,w=v(T);k.textContent=w&&w!==T?w:M.label,M.label===y&&(k.selected=!0),S.appendChild(k)}c.appendChild(S)}}let l=g?.querySelector(".kmod-tags-preview");if(l){let y=Ve();l.innerHTML="",y.length===0?l.innerHTML='<span style="color:rgba(255,255,255,0.2);font-size:13px;">\u041D\u0435\u0442 \u0442\u0435\u0433\u043E\u0432</span>':y.forEach(h=>{let f=document.createElement("span");f.className="kmod-tag-preview-item",f.style.backgroundColor=h.color,f.textContent=h.tagName,l.appendChild(f)})}let m=g?.querySelector("#kmod-templates-list");if(m){let y=me();m.innerHTML="",y.length===0?m.innerHTML='<div style="text-align:center;color:rgba(255,255,255,0.15);padding:8px 0;font-size:13px;">\u041D\u0435\u0442 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432</div>':y.forEach(h=>{let f=document.createElement("div");f.className="kmod-template-item",f.innerHTML=`
                        <span class="kmod-template-command">${h.command}</span>
                        <span class="kmod-template-text">${h.text}</span>
                        <button class="kmod-template-delete" data-id="${h.id}">\u2715</button>
                    `,f.querySelector(".kmod-template-delete")?.addEventListener("click",()=>{if(confirm(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D "${h.command}"?`)){Ke(h.id);let M=g?.querySelector("#kmod-templates-list");if(M){let k=me();M.innerHTML="",k.length===0?M.innerHTML='<div style="text-align:center;color:rgba(255,255,255,0.15);padding:8px 0;font-size:13px;">\u041D\u0435\u0442 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432</div>':k.forEach(T=>{let w=document.createElement("div");w.className="kmod-template-item",w.innerHTML=`
                                            <span class="kmod-template-command">${T.command}</span>
                                            <span class="kmod-template-text">${T.text}</span>
                                            <button class="kmod-template-delete" data-id="${T.id}">\u2715</button>
                                        `,w.querySelector(".kmod-template-delete")?.addEventListener("click",()=>{confirm(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D "${T.command}"?`)&&(Ke(T.id),Ae(),setTimeout(fe,150))}),M.appendChild(w)})}}}),m.appendChild(f)})}}),a.appendChild(s),e.appendChild(a),e}function zr(){let e=document.createElement("div");e.className="kmod-settings-section",e.dataset.section="about";let t=document.createElement("div");t.className="section-header";let n=document.createElement("h3");n.setAttribute("data-i18n","sectionAbout"),n.textContent=v("sectionAbout"),t.appendChild(n);let o=document.createElement("p");o.className="subtitle",o.setAttribute("data-i18n","sectionAboutDesc"),o.textContent=v("sectionAboutDesc"),t.appendChild(o),e.appendChild(t);let a=document.createElement("div");return a.className="kmod-about-content",a.innerHTML=`
        <div class="name">${N.name}</div>
        <div class="version">${v("aboutVersion")}: ${N.version}</div>
        <div class="author">${v("aboutAuthor")}: ${N.author}</div>
        <div class="kmod-about-divider"></div>
        <div class="desc">${v("aboutDescription")}</div>
    `,e.appendChild(a),e}var rt=null,Nt=null,W=null;function Ae(){rt&&(rt.remove(),rt=null,W=null),Nt&&(Nt(),Nt=null)}function Wo(){Nr();let e=document.createElement("div");e.className="kmod-settings-overlay";let t=document.createElement("div");t.className="kmod-settings-window",W=t;let n=document.createElement("div");n.className="kmod-settings-header";let o=document.createElement("h2"),a=document.createElement("span");a.className="gear";let r=Ft();r.style.width="24px",r.style.height="24px",a.appendChild(r),o.appendChild(a);let s=document.createElement("span");s.setAttribute("data-i18n","settingsTitle"),s.textContent=v("settingsTitle"),o.appendChild(s);let u=document.createElement("button");u.className="kmod-settings-close",u.innerHTML="\u2715",u.addEventListener("click",Ae),n.appendChild(o),n.appendChild(u);let d=document.createElement("div");d.className="kmod-settings-body";let p=document.createElement("nav");p.className="kmod-settings-sidebar";let g=[...Uo,"language","about"];for(let k of g){let T=document.createElement("div");T.className=`kmod-sidebar-item${k==="general"?" active":""}`,T.dataset.section=k;let w=document.createElement("span");w.className="icon",w.innerHTML=Ar(We[k]?.icon||"other"),T.appendChild(w);let F=document.createElement("span");F.className="label",F.setAttribute("data-i18n",We[k]?.key||""),F.textContent=v(We[k]?.key||""),T.appendChild(F),T.addEventListener("click",()=>{p.querySelectorAll(".kmod-sidebar-item").forEach(L=>L.classList.remove("active")),T.classList.add("active");let z=d.querySelector(".kmod-settings-content");z.querySelectorAll(".kmod-settings-section").forEach(L=>L.classList.remove("active"));let B=z.querySelector(`.kmod-settings-section[data-section="${k}"]`);B&&B.classList.add("active")}),p.appendChild(T)}let b=document.createElement("div");b.className="kmod-settings-content";for(let k of Uo)b.appendChild(Dr(k));b.appendChild(Pr()),b.appendChild(zr()),d.appendChild(p),d.appendChild(b);let c=document.createElement("div");c.className="kmod-settings-footer";let l=document.createElement("div");l.className="status";let m=document.createElement("span");m.className="dot",l.appendChild(m);let y=document.createElement("span");y.setAttribute("data-i18n","statusActive"),y.textContent=v("statusActive"),l.appendChild(y),c.appendChild(l);let h=document.createElement("div");h.className="actions";let f=document.createElement("button");f.className="btn-reset",f.setAttribute("data-i18n","resetButton"),f.textContent=v("resetButton"),f.addEventListener("click",()=>{confirm(v("resetConfirm"))&&(x.resetToDefaults(),location.reload())});let S=document.createElement("button");S.className="btn-close",S.setAttribute("data-i18n","closeButton"),S.textContent=v("closeButton"),S.addEventListener("click",Ae),h.appendChild(f),h.appendChild(S),c.appendChild(h),t.appendChild(n),t.appendChild(d),t.appendChild(c),e.appendChild(t),e.addEventListener("click",k=>{k.target===e&&Ae()});let M=k=>{k.key==="Escape"&&(Ae(),document.removeEventListener("keydown",M))};document.addEventListener("keydown",M),Nt=wn(()=>{if(!W)return;Xo(W);let k=W.querySelectorAll(".kmod-feature-item");for(let B of k){let L=B.querySelector(".status-badge"),O=B.querySelector(".kmod-switch");if(L&&O){let be=O.classList.contains("active");L.textContent=be?v("statusEnabled"):v("statusDisabled"),L.className=`status-badge ${be?"on":"off"}`}}let T=W.querySelector(".kmod-language-row select");T&&(T.value=Rt());let w=W.querySelector(".kmod-font-select");if(w){let B=w.value;w.innerHTML="";let L=[{label:"\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435",fonts:At},{label:"Google Fonts",fonts:Bt}];for(let O of L){let be=document.createElement("optgroup");be.label=O.label;for(let X of O.fonts){let he=document.createElement("option");he.value=X.label;let ne=`fontFamily${X.label.replace(/[^a-zA-Z]/g,"")}`,oe=v(ne);he.textContent=oe&&oe!==ne?oe:X.label,X.label===B&&(he.selected=!0),be.appendChild(he)}w.appendChild(be)}}let F=W.querySelector(".kmod-tags-preview");if(F){let B=Ve();F.innerHTML="",B.length===0?F.innerHTML='<span style="color:rgba(255,255,255,0.2);font-size:13px;">\u041D\u0435\u0442 \u0442\u0435\u0433\u043E\u0432</span>':B.forEach(L=>{let O=document.createElement("span");O.className="kmod-tag-preview-item",O.style.backgroundColor=L.color,O.textContent=L.tagName,F.appendChild(O)})}let z=W.querySelector("#kmod-templates-list");if(z){let B=me();z.innerHTML="",B.length===0?z.innerHTML='<div style="text-align:center;color:rgba(255,255,255,0.15);padding:8px 0;font-size:13px;">\u041D\u0435\u0442 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432</div>':B.forEach(L=>{let O=document.createElement("div");O.className="kmod-template-item",O.innerHTML=`
                        <span class="kmod-template-command">${L.command}</span>
                        <span class="kmod-template-text">${L.text}</span>
                        <button class="kmod-template-delete" data-id="${L.id}">\u2715</button>
                    `,O.querySelector(".kmod-template-delete")?.addEventListener("click",()=>{if(confirm(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D "${L.command}"?`)){Ke(L.id);let X=W?.querySelector("#kmod-templates-list");if(X){let he=me();X.innerHTML="",he.length===0?X.innerHTML='<div style="text-align:center;color:rgba(255,255,255,0.15);padding:8px 0;font-size:13px;">\u041D\u0435\u0442 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432</div>':he.forEach(ne=>{let oe=document.createElement("div");oe.className="kmod-template-item",oe.innerHTML=`
                                            <span class="kmod-template-command">${ne.command}</span>
                                            <span class="kmod-template-text">${ne.text}</span>
                                            <button class="kmod-template-delete" data-id="${ne.id}">\u2715</button>
                                        `,oe.querySelector(".kmod-template-delete")?.addEventListener("click",()=>{confirm(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D "${ne.command}"?`)&&(Ke(ne.id),Ae(),setTimeout(fe,150))}),X.appendChild(oe)})}}}),z.appendChild(O)})}}),document.body.appendChild(e),rt=e}function fe(){rt?(Ae(),setTimeout(Wo,60)):Wo()}var Yo="kmod-version-badge",qr=300;function Jo(e=N.version){Gr();let t=E("div",{className:Yo,styles:{position:"fixed",bottom:"16px",right:"16px",background:"rgba(0, 0, 0, 0.75)",color:"#888",padding:"6px 14px",borderRadius:"20px",fontSize:"12px",fontFamily:"monospace",zIndex:"99999",userSelect:"none",cursor:"pointer",backdropFilter:"blur(4px)",border:"1px solid rgba(255,255,255,0.05)",transition:`all ${qr}ms ease`,boxShadow:"0 2px 12px rgba(0,0,0,0.4)",letterSpacing:"0.3px",display:"flex",alignItems:"center",gap:"6px"},events:{click:()=>{i.debug("Version badge clicked, opening settings"),fe()},mouseenter:a=>{let r=a.currentTarget;r.style.background="rgba(30, 30, 40, 0.9)",r.style.color="#fff",r.style.borderColor="rgba(255,215,0,0.3)",r.style.transform="scale(1.05)"},mouseleave:a=>{let r=a.currentTarget;r.style.background="rgba(0, 0, 0, 0.75)",r.style.color="#888",r.style.borderColor="rgba(255,255,255,0.05)",r.style.transform="scale(1)"}}}),n=document.createElement("span");n.style.cssText=`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3ba55c;
    animation: kmod-badge-pulse 2s ease-in-out infinite;
  `,t.appendChild(n);let o=document.createTextNode(`v${e}`);if(t.appendChild(o),!document.querySelector("#kmod-badge-styles")){let a=document.createElement("style");a.id="kmod-badge-styles",a.textContent=`
      @keyframes kmod-badge-pulse {
        0% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
        100% { opacity: 0.6; transform: scale(1); }
      }
    `,document.head.appendChild(a)}document.body.appendChild(t)}function Gr(){let e=document.querySelector(`.${Yo}`);e&&e.remove()}var cn=class{constructor(){this.cache=new Map;this.defaultTTL=5e3}get(t){let n=this.cache.get(t);return n?Date.now()-n.timestamp>n.ttl?(this.cache.delete(t),null):n.value:null}set(t,n,o){this.cache.set(t,{value:n,timestamp:Date.now(),ttl:o||this.defaultTTL})}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}invalidateByPrefix(t){for(let n of this.cache.keys())n.startsWith(t)&&this.cache.delete(n)}invalidateByRegex(t){for(let n of this.cache.keys())t.test(n)&&this.cache.delete(n)}},dn=new cn;var It="kmod-settings-btn",Qo="settings-container",it=null,un=!1,Zo=!1;function pn(){let e=dn.get(Qo);if(e&&document.contains(e))return e;let t=document.getElementById("aside-header-title");if(!t)return null;let n=t.textContent?.trim()||"";if(n!=="Settings"&&n!=="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")return null;let o=document.querySelector(".settingsTab.svelte-6bkz6t");return o&&dn.set(Qo,o,1e4),o||null}function ea(e,t){let n=E("span",{className:t});return e.style.width="24px",e.style.height="24px",e.style.display="block",n.appendChild(e),n}function ta(){if(!un){un=!0;try{let e=pn();if(!e||e.querySelector(`.${It}`))return;let t=E("button",{className:`item svelte-6bkz6t ${It}`,events:{click:()=>{i.info("Settings button clicked"),fe()}}}),n=ea(Ft(),"itemIcon svelte-6bkz6t"),o=document.createTextNode(` ${v("settingsTitle")} `),a=ea(qo(),"icon svelte-6bkz6t");t.appendChild(n),t.appendChild(o),t.appendChild(a),e.appendChild(t),i.debug("Settings button created")}catch(e){i.error("Failed to create settings button:",e)}finally{un=!1}}}function na(){it&&(it.disconnect(),it=null),it=new MutationObserver(Fn(()=>{let e=pn();e&&!e.querySelector(`.${It}`)&&ta()},300)),it.observe(document.body,{childList:!0,subtree:!0}),Zo||(Zo=!0,setTimeout(()=>{let e=pn();e&&!e.querySelector(`.${It}`)&&ta()},300))}var $=null,mn=!1;function oa(){if($)return;$=E("div",{styles:{position:"fixed",inset:"0",zIndex:"9999999",background:"#0a0a0f",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontFamily:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',color:"#f0f0f0",transition:"opacity 0.6s ease"}});let e=E("div",{styles:{fontSize:"96px",fontWeight:"900",marginBottom:"32px",animation:"kmodLoaderPulse 1.8s ease-in-out infinite",textShadow:"0 0 60px rgba(74, 222, 128, 0.3)",userSelect:"none"},text:"\u26A1"}),t=E("div",{styles:{width:"72px",height:"72px",border:"4px solid rgba(255,255,255,0.08)",borderTop:"4px solid #4ade80",borderRadius:"50%",animation:"kmodLoaderSpin 0.7s cubic-bezier(0.65, 0, 0.35, 1) infinite",marginBottom:"40px",boxShadow:"0 0 40px rgba(74, 222, 128, 0.15)"}}),n=E("div",{styles:{fontSize:"56px",fontWeight:"900",color:"#ffffff",marginBottom:"8px",letterSpacing:"-2px",textShadow:"0 4px 40px rgba(0,0,0,0.6)",userSelect:"none"},text:N.name}),o=E("div",{styles:{fontSize:"24px",fontWeight:"700",color:"transparent",WebkitTextStroke:"2px rgba(255,255,255,0.25)",letterSpacing:"4px",textTransform:"uppercase",userSelect:"none"},text:`v${N.version}`}),a=document.createElement("style");a.textContent=`
        @keyframes kmodLoaderSpin {
            to { transform: rotate(360deg); }
        }
        @keyframes kmodLoaderPulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes kmodLoaderFadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `,document.head.appendChild(a),$.appendChild(e),$.appendChild(t),$.appendChild(n),$.appendChild(o),document.body.appendChild($)}function ge(){!$||mn||(mn=!0,$.style.animation="kmodLoaderFadeOut 0.5s ease forwards",setTimeout(()=>{$&&($.remove(),$=null),mn=!1},550))}var Be=null;function Xe(e){$&&ge(),Be&&(Be.remove(),Be=null);let{title:t="\u26A0\uFE0F \u041E\u0448\u0438\u0431\u043A\u0430",message:n="\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u043E\u0434",error:o,details:a}=e,r=o instanceof Error?o.message:String(o||""),s=o instanceof Error?o.stack:"";Be=E("div",{styles:{position:"fixed",inset:"0",zIndex:"9999999",background:"#0a0a0f",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',animation:"kmodCrashFade 0.4s ease"}});let u=E("div",{styles:{maxWidth:"700px",width:"90%",padding:"0 20px",textAlign:"center"}}),d=E("div",{styles:{fontSize:"120px",fontWeight:"900",marginBottom:"16px",userSelect:"none",animation:"kmodCrashBounce 1.2s ease-in-out infinite"},text:"\u{1F4A5}"}),p=E("div",{styles:{fontSize:"52px",fontWeight:"900",color:"#ffffff",marginBottom:"12px",letterSpacing:"-2px",textShadow:"0 4px 40px rgba(0,0,0,0.6)",userSelect:"none"},text:t}),g=E("div",{styles:{fontSize:"20px",fontWeight:"700",color:"transparent",WebkitTextStroke:"1.5px rgba(255,255,255,0.3)",letterSpacing:"2px",marginBottom:"24px",textTransform:"uppercase",userSelect:"none"},text:n}),b="";r&&(b+=`<div style="font-size:15px;color:#ed4245;background:rgba(237,66,69,0.08);padding:14px 20px;border-radius:12px;margin-bottom:16px;word-break:break-word;font-family:monospace;border:1px solid rgba(237,66,69,0.15);">${fn(r)}</div>`),s&&s.length>0&&(b+=`<details style="margin-bottom:16px;">
            <summary style="font-size:13px;color:rgba(255,255,255,0.3);cursor:pointer;font-weight:600;letter-spacing:1px;text-transform:uppercase;">\u{1F4CB} \u0421\u0442\u0435\u043A \u043E\u0448\u0438\u0431\u043A\u0438</summary>
            <pre style="font-size:12px;color:rgba(255,255,255,0.2);background:rgba(0,0,0,0.4);padding:14px;border-radius:10px;overflow:auto;max-height:150px;margin-top:8px;white-space:pre-wrap;word-break:break-word;border:1px solid rgba(255,255,255,0.04);">${fn(s)}</pre>
        </details>`),a&&(b+=`<div style="font-size:13px;color:rgba(255,255,255,0.2);margin-top:8px;letter-spacing:0.5px;">${fn(a)}</div>`);let c=E("div",{html:b}),l=E("div",{styles:{display:"flex",gap:"12px",justifyContent:"center",marginTop:"24px",flexWrap:"wrap"}}),m=E("button",{styles:{background:"#4ade80",border:"none",color:"#0a0a0f",padding:"14px 40px",borderRadius:"60px",fontSize:"18px",fontWeight:"800",cursor:"pointer",transition:"all 0.25s ease",letterSpacing:"0.5px",boxShadow:"0 4px 30px rgba(74, 222, 128, 0.25)"},text:"\u21BB \u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",events:{click:()=>{window.location.reload()},mouseenter:h=>{let f=h.currentTarget;f.style.transform="scale(1.04)",f.style.boxShadow="0 8px 50px rgba(74, 222, 128, 0.4)"},mouseleave:h=>{let f=h.currentTarget;f.style.transform="scale(1)",f.style.boxShadow="0 4px 30px rgba(74, 222, 128, 0.25)"}}}),y=E("button",{styles:{background:"transparent",border:"2px solid rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.6)",padding:"14px 32px",borderRadius:"60px",fontSize:"16px",fontWeight:"700",cursor:"pointer",transition:"all 0.25s ease",letterSpacing:"0.5px"},text:"\u26D4 \u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043C\u043E\u0434",events:{click:()=>{try{localStorage.setItem("kmod_safe_mode","true")}catch{}window.location.reload()},mouseenter:h=>{let f=h.currentTarget;f.style.borderColor="rgba(255,255,255,0.3)",f.style.color="#ffffff",f.style.transform="scale(1.02)"},mouseleave:h=>{let f=h.currentTarget;f.style.borderColor="rgba(255,255,255,0.12)",f.style.color="rgba(255,255,255,0.6)",f.style.transform="scale(1)"}}});l.appendChild(m),l.appendChild(y),u.appendChild(d),u.appendChild(p),u.appendChild(g),u.appendChild(c),u.appendChild(l),Be.appendChild(u),document.body.appendChild(Be),console.error("[KMOD] CRASH:",{title:t,message:n,error:o,details:a})}function fn(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function gn(){return Be!==null}(function(){let t=`
        @keyframes kmodCrashFade {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes kmodCrashBounce {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.08) rotate(-2deg); }
        }
    `,n=document.createElement("style");n.textContent=t,document.head.appendChild(n)})();var aa=!1,Ht=null,st=null,Oe=null,lt=null,_r=500,bn=3;function jr(){try{return window.location.hostname.includes("max.ru")}catch{return!1}}function sa(){try{zo()}catch(e){i.error("Failed to apply all features:",e)}}function ra(){Ye()&&(Oe&&clearTimeout(Oe),Oe=window.setTimeout(()=>{Oe=null;try{for(let e of Object.keys(Le))try{Ue(e)&&an(e)}catch(t){i.error(`Failed to apply feature "${e}" on DOM change:`,t)}}catch(e){i.error("Error in DOM change handler:",e)}},_r))}async function ia(){if(aa){i.debug("Already initialized, skipping");return}return Ht?(i.debug("Initialization already in progress, waiting..."),Ht):(Ht=(async()=>{let e=0;for(;e<bn;)try{e++,await Vr(),aa=!0,i.info(`\u2705 ${N.name} v${N.version} initialized successfully`);return}catch(t){if(i.error(`Init attempt ${e}/${bn} failed:`,t),e>=bn)throw t;await new Promise(n=>setTimeout(n,500*e))}})(),Ht)}async function Vr(){jr()||i.warn("Mod is not running on max.ru. Some features may not work."),vn(),i.info(`\u{1F310} Locale: ${v("settingsTitle")}`),sa();try{Jo(N.version)}catch(e){i.error("Failed to create version badge:",e)}try{gt(()=>{na()},2e3)}catch(e){i.error("Failed to create settings buttons:",e)}st||(st=A(()=>{ra()}),i.debug("DOM watcher started")),lt||(lt=An(e=>{e&&ra()})),Kr(),_o(),ge(),i.info("\u2705 Mod initialized")}function Kr(){typeof window>"u"||(window.kmod={config:N,storage:x,locales:ut,getLocale:v,utils:{logger:i},features:{toggleFeature:Lt,isFeatureEnabled:Ue,applyFeature:an,applyAllFeatures:sa},ui:{openSettingsModal:fe},version:N.version},i.debug("\u2705 Global API available: window.kmod"))}typeof window<"u"&&oa();var Ur=typeof window<"u"&&localStorage.getItem("kmod_safe_mode")==="true";Ur?(console.warn("[KMOD] \u{1F6E1}\uFE0F Safe mode enabled \u2014 skipping initialization"),setTimeout(()=>{ge(),Xe({title:"\u{1F6E1}\uFE0F \u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",message:"\u041C\u043E\u0434 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D \u0432 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435. \u0427\u0442\u043E\u0431\u044B \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u043D\u043E\u0432\u0430 \u2014 \u0443\u0434\u0430\u043B\u0438\u0442\u0435 kmod_safe_mode \u0438\u0437 localStorage."})},500)):typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{gt(()=>{ia().catch(e=>{ge(),Xe({title:"\u{1F4A5} \u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438",message:"\u041C\u043E\u0434 \u043D\u0435 \u0441\u043C\u043E\u0433 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C\u0441\u044F. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438\u043B\u0438 \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043C\u043E\u0434.",error:e,details:`\u041F\u043E\u043F\u044B\u0442\u043A\u0430 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0430 ${window.location.hostname}`})})},1500)}):gt(()=>{ia().catch(e=>{ge(),Xe({title:"\u{1F4A5} \u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438",message:"\u041C\u043E\u0434 \u043D\u0435 \u0441\u043C\u043E\u0433 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C\u0441\u044F. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438\u043B\u0438 \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043C\u043E\u0434.",error:e,details:`\u041F\u043E\u043F\u044B\u0442\u043A\u0430 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0430 ${window.location.hostname}`})})},1e3));typeof window<"u"&&(window.addEventListener("error",e=>{let t=e.message||"",n=e.filename||"";(t.includes("kmod")||t.includes("kMax")||t.includes("KMOD")||n.includes("kmod")||n.includes("kMax"))&&(gn()||(ge(),Xe({title:"\u{1F4A5} \u041A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u043C\u043E\u0434\u0430",message:"\u0412 \u0440\u0430\u0431\u043E\u0442\u0435 \u043C\u043E\u0434\u0430 \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430.",error:e.error||e.message,details:`${e.filename}:${e.lineno}:${e.colno}`})))}),window.addEventListener("unhandledrejection",e=>{let t=e.reason,n=String(t||"");t&&typeof t=="object"&&(t.stack?.includes("kmod")||t.stack?.includes("kMax")||n.includes("kmod")||n.includes("kMax"))&&(gn()||(ge(),Xe({title:"\u{1F4A5} \u041D\u0435\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430",message:"\u0412 \u0440\u0430\u0431\u043E\u0442\u0435 \u043C\u043E\u0434\u0430 \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430.",error:t})))}));window.addEventListener("beforeunload",()=>{st&&(st(),st=null),Oe&&(clearTimeout(Oe),Oe=null),lt&&(lt(),lt=null),i.debug("Cleanup completed")});})();
//# sourceMappingURL=mod.min.user.js.map
