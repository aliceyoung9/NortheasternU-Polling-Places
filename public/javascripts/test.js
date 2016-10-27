var dorms = ["Burstein Hall",
  "10 Coventry Street",
  "Davenport Commons A",
  "Davenport Commons B",
  "Douglass Park Leased Properties"
  "East Village",
  "International Village",
  "Kennedy Hall",
  "Kerr Hall",
  "Levine Hall",
  "Light Hall",
  "153 Hemenway Street",
  "319 Huntington Avenue"
  "Loftman",
  "Melvin Hall",
  "Rubenstein Hall",
  "Smith Hall",
  "Speare Hall",
  "St. Stephen St. Complex",
  "Stetson East",
  "Stetson West",
  "West Village A North",
  "West Village A South",
  "West Village B",
  "West Village C",
  "West Village E",
  "West Village F",
  "West Village G",
  "West Village H",
  "Willis Hall"
];

// constructs the suggestion engine
var dorms = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // `dorms` is an array of state names defined in "The Basics",
  local: $.map(dorms, function(state) { return { value: state }; })
});

// kicks off the loading/processing of `local` and `prefetch`
dorms.initialize();

$('#prefetch .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'dorms',
  displayKey: 'value',
  // `ttAdapter` wraps the suggestion engine in an adapter that
  // is compatible with the typeahead jQuery plugin
  source: dorms.ttAdapter()
});

  // typeahead.js is overly opinionated about their gross-ass stylings.
$(".tt-hint").addClass("form-control");
