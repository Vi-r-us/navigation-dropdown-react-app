import imgMobile from "./assets/image-hero-mobile.png";
import imgDesktop from "./assets/image-hero-desktop.png";
import arrowSvg from "./assets/icon-arrow-down.svg";

import clientAudiophile from "./assets/client-audiophile.svg";
import clientDatabiz from "./assets/client-databiz.svg";
import clientMaker from "./assets/client-maker.svg";
import clientMeet from "./assets/client-meet.svg";

import logoSvg from "./assets/logo.svg";
import todoSvg from "./assets/icon-todo.svg";
import calendarSvg from "./assets/icon-calendar.svg";
import remindersSvg from "./assets/icon-reminders.svg";
import planningSvg from "./assets/icon-planning.svg";

export const heroImageMobile = imgMobile;
export const heroImageDesktop = imgDesktop;
export const logo = logoSvg;
export const arrow = arrowSvg;

export const partners = [
  clientDatabiz,
  clientAudiophile,
  clientMeet,
  clientMaker,
];

export const links = [
  {
    title: "features",
    subLinks: [
      { title: "todo list", icon: todoSvg },
      { title: "calendar", icon: calendarSvg },
      { title: "reminders", icon: remindersSvg },
      { title: "planning", icon: planningSvg },
    ],
  },
  {
    title: "company",
    subLinks: [{ title: "history" }, { title: "our team" }, { title: "blog" }],
  },
  { title: "careers" },
  { title: "about" },
];
