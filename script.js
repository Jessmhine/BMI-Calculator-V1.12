function showDefinition() {
  alert("FEATURES:   Accurate BMI Calculation:Our calculator provides precise calculations based on user-input weight and height.  BMI Classification: It categorizes the calculated BMI into different weight categories for easy interpretation.  Recommendations: For users classified as underweight, we offer tailored recommendations on diet and exercise to support their journey towards a healthier weight.");
}

function showAboutUs() {
  alert("CREATORS:  Our BMI Calculator was developed by a team of health and technology enthusiasts dedicated to promoting awareness of body weight and its impact on overall health.  PURPOSE: The BMI Calculator was created with the goal of providing individuals with a simple yet effective tool to assess their body mass index and understand its implications for their health and well-being.  ACCURACY: We ensure the accuracy and reliability of our BMI calculations, empowering users to make informed decisions about their health. MISSION: Our mission is to empower individuals to take control of their health by providing them with valuable tools and information, starting with a better understanding of their body mass index.");
}

function goToPage2() {
  window.location.href = "page2.html";
}

function calculateBMI() {
  var weightInput = document.getElementById("weightInput").value;
  var heightInput = document.getElementById("heightInput").value;

  // Check if weight and height inputs are not empty
  if (weightInput === "" || heightInput === "") {
      alert("Please enter your weight and height before calculating BMI.");
      return; // Exit the function if inputs are empty
  }

  var weight = parseFloat(weightInput);
  var height = parseFloat(heightInput) / 100; // Convert height from cm to meters

  var bmi = weight / (height * height);
  var result = document.getElementById("result");
  var recommendations = document.getElementById("recommendations");

  result.textContent = "Your BMI Is: " + bmi.toFixed(2);

  if (bmi < 18.5) {
      result.style.color = "red";
      result.textContent += " (Underweight)";
      recommendations.innerHTML = "<p>Recommendations:</p><p>Diet for Underweight Individuals (Gain Weight):</p><p>~Focus on calorie-dense, nutrient-rich foods:</p><p>~Healthy fats: Avocados, nuts (almonds, walnuts), seeds (chia, flax), olive oil.</p><p>~Lean protein: Chicken, fish (salmon, tuna), eggs, beans (black beans, kidney beans), lentils.</p><p>~High-calorie fruits: Bananas, mangoes, grapes, dried fruits (raisins, dates).</p><p> ~Starchy vegetables: Potatoes, sweet potatoes, corn, peas.</p><p>Full-fat dairy: Whole milk, yogurt, cheese. </p><p>~Eat more frequently: Aim for 5-6 smaller meals and snacks throughout the day.</p><p>~Increase portions gradually: Don't overwhelm your stomach, but slowly up your intake.</p><p>~Healthy calorie-dense snacks: Nut butter and banana toast, smoothies with fruits, yogurt, and protein powder, trail mix, cottage cheese with vegetables.</p><p>~Frequent meals: Aim for 3 meals and 2-3 snacks throughout the day.</p><p>~Nutrient-rich choices: Include a good source of protein, healthy fats, and complex carbohydrates in each meal.</p><p>~Calorie surplus: Consume slightly more calories than you burn each day.</p><p>Healthy Weight Gain Tips:</p><p>~Don't skip meals: Aim for consistency throughout the day.</p><p>~Drink high-calorie beverages: Include smoothies, milk, and fresh fruit juices.</p><p>~Add healthy fats: Cook with olive oil, avocado, nuts, and seeds.</p><p>~Strength training: Build muscle mass to support weight gain.</p><p>~Stay hydrated: Drink plenty of water throughout the day.</p><p></p><p>";
  } else if (bmi >= 18.5 && bmi < 25) {
      result.style.color = "green";
      result.textContent += " (Normal Weight)";
      recommendations.innerHTML = "";
  } else {
      result.style.color = "red";
      result.textContent += " (Overweight)";
      recommendations.innerHTML = "<p>Recommendations:</p><p>Diet for Overweight Individuals (Lose Weight):</p><p>~Focus on whole foods: Fruits, vegetables, whole grains, legumes, lean protein sources, and healthy fats.Reduce sugary drinks and processed foods: Limit sodas, sugary juices, fast food, and packaged snacks.</p><p>~Increase fruits and vegetables: Aim for several servings daily for fiber and water content. Choose lean protein sources: Chicken, fish, beans, lentils, and tofu to build muscle mass.</p><p>~Healthy fats: Include avocados, nuts, seeds, and olive oil for satiety and heart health. Portion control: Use smaller plates and bowls to avoid overeating.</p><p> <p></p><p>Sample Meal Plan:</p><p>~Breakfast: Oatmeal with berries and nuts / Greek yogurt with fruit and granola</p>Lunch: Salad with grilled chicken or fish / Vegetable wrap with whole-wheat bread<p></p>~Dinner: Salmon with roasted vegetables / Lentil soup with whole-grain bread<p></p><p>Snacks: Fruits, vegetables, nuts, or yogurt<p></p><p><p></p><p>Exercise:<p></p><p>Start slow and gradually increase intensity and duration. <p></p><p>Find activities you enjoy: Consistency is key, so choose something you find fun. Aim for at least 150 minutes of moderate-intensity exercise or 75 minutes of vigorous-intensity exercise per week.<p></p><p> Moderate-intensity: Brisk walking, biking, swimming, dancing.<p></p><p> Vigorous-intensity: Running, jumping rope, interval training.<p></p><p><p></p><p>Sample Exercise Routine:<p></p><p>~Warm-up (5 minutes): Light cardio like walking or jogging in place. <p></p><p>Cardio (30 minutes): Choose your preferred activity. <p></p><p>~Strength training (20-30 minutes): Bodyweight exercises like squats, lunges, push-ups, rows, planks. Gradually add light weights as you get stronger. <p></p><p>~Cool-down (5 minutes): Stretching to improve flexibility.<p></p><p>Additional Tips:<p></p><p>~Consult a doctor before starting a new exercise program. Consider a registered dietitian for a personalized meal plan. Stay hydrated by drinking plenty of water. Set realistic goals and track your progress. Find a workout buddy or join a fitness class for motivation.</p><p>";
    }
  }