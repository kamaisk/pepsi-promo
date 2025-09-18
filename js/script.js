$(document).ready(function () {
  let currentStep = 1;
  const totalSteps = $(".slide").length;

  function showSlide(step) {
    // Скрываем все слайды
    $(".slide").hide().removeClass("active");
    // Показываем нужный
    $(`.slide[data-step="${step}"]`).fadeIn(300).addClass("active");

    // Обновляем шаги
    $(".step").removeClass("active");
    $(`.step:eq(${step - 1})`).addClass("active");

    currentStep = step; // сохраняем текущий шаг
  }

  // При клике на кнопку-ответ
  $(".btn-answer").on("click", function () {
    if (currentStep < totalSteps) {
      showSlide(currentStep + 1);
    } else {
      // если вопросы закончились
      alert("Спасибо за участие в опросе! 🎉");
    }
  });

  // При клике на цифры (steps)
  $(".step").on("click", function () {
    const index = $(this).index() + 1; // шаги начинаются с 1
    showSlide(index);
  });

  // Начальный показ
  showSlide(currentStep);
});
