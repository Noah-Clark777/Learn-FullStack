$("button").css("color", "green");

$("h1").addClass("big-title margin-50 ");
// $("h1").removeClass("big-title  ");

$("h1").text("good night world");

$("button").html("<em> don't click me</em>");

$("img").attr("src");
$("a").attr("href", "https://yahoo.com");

$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("button").click(function () {
  $("h1").css("color", "green");
});

$("input").keydown(function (e) {
  console.log(e.key);
  $("h1").text(e.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "black");
});

$("h1").before("<button>new</button>");
$("h1").after("<button>new</button>");
$("h1").prepend("<button>new</button>");
$("h1").append("<button>new</button>");
