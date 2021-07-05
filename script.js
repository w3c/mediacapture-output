var respecConfig = {
   // specification status (e.g. WD, LCWD, NOTE, etc.). If in doubt use ED.
   specStatus:           "ED",

   // the specification's short name, as in http://www.w3.org/TR/short-name/
   shortName:            "audio-output",
   // if your specification has a subtitle that goes below the main
   // formal title, define it here
   // subtitle   :  "an excellent document",

   // if you wish the publication date to be other than today, set this
   // publishDate:  "2009-08-06",


   // if the specification's copyright date is a range of years, specify
   // the start date here:
   // copyrightStart: "2005",

   // if there is a previously published draft, uncomment this and set its YYYY-MM-DD
   // prevED: "",

   // if there a publicly available Editor's Draft, this is the link
   edDraftURI: "https://w3c.github.io/mediacapture-output/",

   // if this is a LCWD, uncomment and set the end of its review period
   // lcEnd: "2009-08-05",

   // if you want to have extra CSS, append them to this list
   // it is recommended that the respec.css stylesheet be kept
   //extraCSS:             ["http://dev.w3.org/2009/dap/ReSpec.js/css/respec.css"],
   //extraCSS:           ["../../../2009/dap/ReSpec.js/css/respec.css"],

   // editors, add as many as you like
   // only "name" is required
   editors:  [
       // { name: "Your Name", url: "http://example.org/",
       // company: "Your Company", companyURL: "http://example.com/" },
       { name: "Justin Uberti", company: "Google", w3cid: 51065 },
       { name: "Guido Urdaneta", company: "Google", w3cid: 84810 },
       { name: "Youenn Fablet", company: "Apple", w3cid: 96458 }
   ],

   // authors, add as many as you like.
   // This is optional, uncomment if you have authors as well as editors.
   // only "name" is required. Same format as editors.

   //authors:  [
   //    { name: "Your Name", url: "http://example.org/",
   //      company: "Your Company", companyURL: "http://example.com/" },
   //],

   // name of the WG
   group: "webrtc",
   // name (without the @w3.org) of the public mailing to which comments are due
   wgPublicList: "public-webrtc",
   github: "https://github.com/w3c/mediacapture-output/",
  xref: ["webidl", "html", "permissions", "mediacapture-streams", "permissions-policy","dom", "webaudio"],
     implementationReportURI: "https://wpt.fyi/audio-output",
   otherLinks: [
    {
      key: "Participate",
      data: [
        {
          value: "Mailing list",
          href: "https://lists.w3.org/Archives/Public/public-webrtc/"
        }
      ]
    }
  ],
};
