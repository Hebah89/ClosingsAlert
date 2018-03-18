{
    "id": "components/news/ClosingsAlerts",
    "tag": "news",
    "propTypes": {
      "type": "PropTypes.string",
      "title": "PropTypes.string",
      "titleColor": "PropTypes.string",
      "backgroundColor": "PropTypes.string",
      "backgroundStyle": "PropTypes.string",
      "text": "PropTypes.string",
      "abstractText": "PropTypes.string",
      "textColor": "PropTypes.string",
      "numberColor": "PropTypes.string",
      "numberbackgroundColor": "PropTypes.string",
      "destinationURL": "PropTypes.string",
      "cornerStyle": "PropTypes.string",
      "outlineColor": "PropTypes.string",
      "statusColor": "PropTypes.string"
    },
    "defaultProps": {
      "type": "banner",
      "title": "Closings & Delays",
      "cornerStyle": "square",
      "backgroundStyle": "solid",
      "text":  "See the latest closings in the area.",
      "abstractText": "The following is a list of the current closings and delays for schools, governments, houses of worship and other organizations."
    },
    "propChoices": {
      "type": [
        "banner", "full view"
      ],
      "cornerStyle": [
        "round", "soft", "square"
      ],
      "backgroundStyle": [
        "solid", "outline"
      ]
    },
    "icon": "icon_stroke_news_closings.svg"
  }
