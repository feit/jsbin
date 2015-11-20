var env = process.env

module.exports = {
  "env": "production",
  "timezone": "UTC",
  "url": {
    "host": "play.codev.cc",
    "prefix": "/",
    "ssl": false,
    "static": false,
    "runner": false
  },
  "max-request-size": "1MB",
  "max-age": 86400,
  "store": {
    "adapter": "mysql",
    "sqlite": {
      "location": "jsbin.sqlite"
    },
    "mysql": {
      "host": env.MYSQL_PORT_3306_TCP_ADDR,
      "user": env.MYSQL_USERNAME,
      "password": env.MYSQL_PASSWORD,
      "database": env.MYSQL_INSTANCE_NAME,
      "charset": "utf8mb4",
      "collate": "utf8mb4_unicode_ci"
    }
  },
  "session": {},
  "analytics": {
    "id": null,
    "render-id": null
  },
  "ui": {},
  "mail": {
    "adapter": "sendmail",
    "sendmail": {},
    "smtp": {
      "service": "Gmail",
      "auth": {
          "user": "",
          "pass": ""
      }
    }
  },
  "server": {
    "logger": "none"
  },
  "security": {
    "allowAnonymousPreview": false
  },
  "client": {
    "user": true
  },
  "github": {
    "id": "",
    "secret": ""
  },
  "notify": {
    "errors": [],
    "report": []
  },
  "api": {
    "allowAnonymousReadWrite": false,
    "allowAnonymousRead": true,
    "requireSSL": false
  },
  "blacklist": {
    "html": ["processform.cgi", "habbo.com"],
    "css": [],
    "javascript": []
  },
  "reserved": [
    "donate",
    "list",
    "show",
    "gist",
    "about",
    "account",
    "accounts",
    "activity",
    "all",
    "announcements",
    "api",
    "api_rules",
    "api_terms",
    "apirules",
    "apps",
    "archive",
    "auth",
    "badges",
    "bin",
    "bins",
    "blog",
    "bugs",
    "business",
    "clone",
    "contacts",
    "collection",
    "collections",
    "css",
    "delete",
    "default",
    "devices",
    "download",
    "downloads",
    "edit",
    "embed",
    "faq",
    "favorites",
    "favs",
    "find_sources",
    "find_users",
    "followers",
    "following",
    "fonts",
    "font",
    "friend_request",
    "friendrequest",
    "friends",
    "goodies",
    "help",
    "home",
    "history",
    "hooks",
    "images",
    "img",
    "inbox",
    "index",
    "invitations",
    "invite",
    "issues",
    "jobs",
    "js",
    "last",
    "login",
    "logout",
    "me",
    "messages",
    "new",
    "notifications",
    "nudge",
    "null",
    "open",
    "output",
    "oauth",
    "post",
    "pro",
    "processor",
    "profile",
    "privacy",
    "rules",
    "runner",
    "static",
    "scripts",
    "save",
    "search",
    "sent",
    "settings",
    "share",
    "signup",
    "signin",
    "status",
    "static",
    "statistics",
    "terms",
    "test",
    "tos",
    "translate",
    "trends",
    "unarchive",
    "update",
    "upgrade",
    "user",
    "users",
    "watch",
    "widgets",
    "tutorials",
    "video",
    "videos",
    "-"
  ]
}
