let myDataFromServer = null;

$("#ingredients-btn").on("click", function () {
  let input = $("#ingredients-input").val();
  $.get(`recipes/${input}`, function (resDataPlayers) {
    myDataFromServer = resDataPlayers;
    render();
  });
});

$(document).on("click", ".photoHolder", function () {
  let relevantInputValue = $(this)
    .closest(".playerDiv")
    .find("li")[0].innerHTML;
  alert(relevantInputValue);
});

const render = function () {
  $(".dataDiv").empty();
  const source = $("#players-template").html();
  const template = Handlebars.compile(source);
  const newHTML = template(myDataFromServer);

  $(".dataDiv").append(newHTML);
};
