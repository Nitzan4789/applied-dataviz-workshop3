//map using d3+ (color the countries)
var sample_data = [
    {"year": "1992 - 2014", "country": "aschn", "name": "China", "tags": "birth country; undergraduate", "color": "#ABDDA4"},
    {"year": "2014", "country": "eudeu", "name": "Germany", "tags": "conference", "color": "#ABDDA4"},
    {"year": "2014 - 2017", "country": "nausa", "name": "United States", "tags": "graduate", "color": "#ABDDA4"},
    {"year": "2016", "country": "nabhs", "name": "Bahamas", "tags": "travel", "color": "#ABDDA4"},
    {"year": "2017", "country": "sachl", "name": "Chile", "tags": "research", "color": "#ABDDA4"}
];

var visualization = d3plus.viz()
    .container("#svg_map")        // container DIV to hold the visualization
    .data(sample_data)            // data to use with the visualization
    .coords({
        "mute": ["anata"],
        "value": "http://d3plus.org/topojson/countries.json"
    }) // pass topojson coordinates
    .type("geo_map")              // visualization type
    .id("country")                // key for which our data is unique on
    .text("name")                 // key to use for display text
    .color("color")               // key for coloring countries
    .tooltip(["year", "tags"])              // keys to place in tooltip
    .draw();                      // finally, draw the visualization!


/*//using datamaps (d3) http://datamaps.github.io
var basic_choropleth = new Datamap({
  element: document.getElementById("svg_map"),
  projection: 'mercator',
  fills: {
    defaultFill: "#CCCCCC",
    authorHasTraveledTo: "#ABDDA4"
  },
  data: {
    CHN: { fillKey: "authorHasTraveledTo", year: "1992 - 2014" },
    DEU: { fillKey: "authorHasTraveledTo", year: "2014" },
    USA: { fillKey: "authorHasTraveledTo", year: "2014 - 2017" },
    BHS: { fillKey: "authorHasTraveledTo", year: "2016" },
    CHL: { fillKey: "authorHasTraveledTo", year: "2017" }
  },
  geographyConfig: {
    popupTemplate: function(geo, data) {
        return ['<div class="hoverinfo"><strong>',
                'Country: ' + geo.properties.name,
                '<br> Year: ' + data.year,
                '</strong></div>'].join('');
    }
  }
});*/
