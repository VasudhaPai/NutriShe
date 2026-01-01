/* =========================================
   NutriShe - Main JavaScript File
   Frontend-only interactions
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav();
  smoothScroll();
  contactFormHandler();
});

/* =========================================
   Highlight Active Navigation Link
   ========================================= */
function highlightActiveNav() {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });
}

/* =========================================
   Smooth Scroll for Anchor Links (Future-ready)
   ========================================= */
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* =========================================
   Contact Form Handler (Frontend only)
   ========================================= */
function contactFormHandler() {
  const form = document.querySelector(".contact-form");

  if (!form) return; // Only runs on contact page

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Frontend-only feedback
    alert("Thank you for your message! We will get back to you soon.");

    form.reset();
  });
}
/* =========================================
   Age-Based Diet Plan Logic
   ========================================= */
function showAgePlan(ageGroup) {
  const result = document.getElementById("ageResult");

  let content = "";

  if (ageGroup === "teens") {
    content = `
      <h3>Teens (13–19)</h3>
      <ul>
        <li>Focus on calcium and iron intake</li>
        <li>Include fruits, vegetables, and whole grains</li>
        <li>Avoid excessive junk food</li>
      </ul>
    `;
  } 
  else if (ageGroup === "20s30s") {
    content = `
      <h3>Adults (20–35)</h3>
      <ul>
        <li>Balanced diet with protein, fiber, and healthy fats</li>
        <li>Iron-rich foods to support energy levels</li>
        <li>Regular meals and hydration</li>
      </ul>
    `;
  } 
  else if (ageGroup === "36to50") {
    content = `
      <h3>Mid Age (36–50)</h3>
      <ul>
        <li>Focus on metabolism-friendly foods</li>
        <li>Increase fiber and calcium intake</li>
        <li>Limit sugar and refined carbs</li>
      </ul>
    `;
  } 
  else if (ageGroup === "50plus") {
    content = `
      <h3>50+</h3>
      <ul>
        <li>Calcium and vitamin D for bone health</li>
        <li>Light, easy-to-digest meals</li>
        <li>Stay hydrated and active</li>
      </ul>
    `;
  }

  result.innerHTML = content;
}
/* =========================================
   Health-Based Diet Plan Logic
   ========================================= */
function showHealthPlan(condition) {
  const result = document.getElementById("healthResult");
  let content = "";

  if (condition === "pcos") {
    content = `
      <h3>PCOS</h3>
      <ul>
        <li>Focus on low-glycemic foods</li>
        <li>Include fiber-rich vegetables</li>
        <li>Limit processed sugar</li>
      </ul>
    `;
  }
  else if (condition === "anemia") {
    content = `
      <h3>Anemia</h3>
      <ul>
        <li>Include iron-rich foods like spinach and lentils</li>
        <li>Pair iron sources with vitamin C</li>
        <li>Avoid tea or coffee right after meals</li>
      </ul>
    `;
  }
  else if (condition === "thyroid") {
    content = `
      <h3>Thyroid</h3>
      <ul>
        <li>Eat balanced meals at regular intervals</li>
        <li>Include selenium and iodine-rich foods</li>
        <li>Limit highly processed foods</li>
      </ul>
    `;
  }
  else if (condition === "pregnancy") {
    content = `
      <h3>Pregnancy</h3>
      <ul>
        <li>Eat nutrient-dense, balanced meals</li>
        <li>Include iron, calcium, and protein sources</li>
        <li>Stay hydrated and avoid junk food</li>
      </ul>
      <p><strong>Note:</strong> Always consult a healthcare professional during pregnancy.</p>
    `;
  }

  result.innerHTML = content;
}
/* =========================================
   Goal-Based Diet Plan Logic
   ========================================= */
function showGoalPlan(goal) {
  const result = document.getElementById("goalResult");
  let content = "";

  if (goal === "weightloss") {
    content = `
      <h3>Weight Loss</h3>
      <ul>
        <li>Focus on portion control</li>
        <li>Include fiber-rich vegetables and fruits</li>
        <li>Limit sugary and fried foods</li>
      </ul>
    `;
  }
  else if (goal === "weightgain") {
    content = `
      <h3>Weight Gain</h3>
      <ul>
        <li>Eat calorie-dense but nutritious foods</li>
        <li>Include healthy fats and proteins</li>
        <li>Eat regular meals and snacks</li>
      </ul>
    `;
  }
  else if (goal === "toning") {
    content = `
      <h3>Muscle Toning</h3>
      <ul>
        <li>Include adequate protein sources</li>
        <li>Balance carbs and healthy fats</li>
        <li>Stay consistent with meals</li>
      </ul>
    `;
  }
  else if (goal === "healthy") {
    content = `
      <h3>Healthy Lifestyle</h3>
      <ul>
        <li>Eat balanced meals</li>
        <li>Stay hydrated</li>
        <li>Limit processed foods</li>
      </ul>
    `;
  }

  result.innerHTML = content;
}
/* =========================================
   Advanced Custom Diet Plan Logic
   ========================================= */

const customForm = document.getElementById("customPlanForm");

if (customForm) {
  customForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const age = parseInt(document.getElementById("age").value);
    const goal = document.getElementById("goal").value;
    const diet = document.getElementById("diet").value;
    const activity = document.getElementById("activity").value;
    const condition = document.getElementById("condition").value;

    const allergyChecks = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    const allergies = Array.from(allergyChecks).map(cb => cb.value);

    /* ---------- AGE GUIDANCE ---------- */
    let ageAdvice = "";
    if (age < 20) {
      ageAdvice = "Focus on growth-supporting foods with adequate calcium and iron.";
    } else if (age <= 35) {
      ageAdvice = "Maintain balanced meals with sufficient protein and energy.";
    } else if (age <= 50) {
      ageAdvice = "Prioritize fiber-rich foods and metabolism-friendly meals.";
    } else {
      ageAdvice = "Choose easy-to-digest foods and focus on bone health.";
    }

    /* ---------- GOAL GUIDANCE ---------- */
    let goalAdvice = "";
    if (goal === "weight loss") {
      goalAdvice = "Focus on portion control and high-fiber foods.";
    } else if (goal === "weight gain") {
      goalAdvice = "Include healthy fats and regular nutrient-dense meals.";
    } else {
      goalAdvice = "Aim for balanced and consistent eating habits.";
    }

    /* ---------- ACTIVITY GUIDANCE ---------- */
    let activityAdvice = "";
    if (activity === "sedentary") {
      activityAdvice = "Avoid frequent snacking and monitor portion sizes.";
    } else if (activity === "moderate") {
      activityAdvice = "Maintain regular meals with balanced nutrients.";
    } else {
      activityAdvice = "Ensure adequate protein intake and hydration.";
    }

    /* ---------- HEALTH NOTES ---------- */
    let healthNote = "";
    if (condition === "pcos") {
      healthNote = "Prefer low-sugar, high-fiber foods.";
    } else if (condition === "anemia") {
      healthNote = "Include iron-rich foods and vitamin C sources.";
    } else if (condition === "pregnancy") {
      healthNote = "Focus on nutrient-dense meals and consult professionals.";
    }

    /* ---------- ALLERGY MESSAGE ---------- */
    let allergyNote = allergies.length
      ? `Avoid foods containing: ${allergies.join(", ")}.`
      : "No specific food allergies selected.";

    /* ---------- FINAL OUTPUT ---------- */
    document.getElementById("customResult").innerHTML = `
      <h3>Your Custom Diet Guidance</h3>
      <ul>
        <li><strong>Diet Preference:</strong> ${diet}</li>
        <li><strong>Goal:</strong> ${goal}</li>
        <li><strong>Activity Level:</strong> ${activity}</li>
        <li><strong>Allergies:</strong> ${allergyNote}</li>
      </ul>

      <p><strong>Age-based advice:</strong> ${ageAdvice}</p>
      <p><strong>Goal-based advice:</strong> ${goalAdvice}</p>
      <p><strong>Activity-based advice:</strong> ${activityAdvice}</p>
      <p><strong>Health note:</strong> ${healthNote || "None"}</p>

      <p><strong>Note:</strong> This is general nutrition guidance and not medical advice.</p>
    `;
  });
}
