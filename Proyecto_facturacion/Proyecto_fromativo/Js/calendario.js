// Inicializar los meses y días de la semana
const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  
  // Elementos del DOM
  const monthElement = document.getElementById("month");
  const yearElement = document.getElementById("year");
  const daysElement = document.getElementById("days");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  
  // Función para cargar el calendario
  function loadCalendar(month, year) {
    // Mostrar el mes y año actuales
    monthElement.textContent = months[month];
    yearElement.textContent = year;
  
    // Obtener el primer día del mes
    const firstDay = new Date(year, month, 1).getDay();
    
    // El número de días en el mes
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Vaciar el calendario antes de llenarlo
    daysElement.innerHTML = "";
  
    // Agregar los días previos en blanco si el mes no empieza en lunes
    for (let i = 1; i < firstDay; i++) {
      const emptyDay = document.createElement("div");
      daysElement.appendChild(emptyDay);
    }
  
    // Llenar los días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("div");
      dayElement.textContent = day;
      daysElement.appendChild(dayElement);
    }
  }
  
  // Cambiar al mes anterior
  prevButton.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    loadCalendar(currentMonth, currentYear);
  });
  
  // Cambiar al siguiente mes
  nextButton.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    loadCalendar(currentMonth, currentYear);
  });
  
  // Cargar el calendario por primera vez
  loadCalendar(currentMonth, currentYear);
  