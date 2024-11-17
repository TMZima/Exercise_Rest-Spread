/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.

const trackAnimals = (...animals) => {
  console.log(`Animal sightings: ${animals.join(", ")}`);
};

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

const protectedHabitats = [...forestHabitats, ...savannahHabitats];
console.log(`Protected Habitats: ${protectedHabitats.join(", ")}`);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

const updatedRhinoStatus = {
  ...rhinoStatus,
  population: 600,
  status: "Vulnerable",
  habitat: "Grassland",
};
console.log("Updated Rhino Status: ", updatedRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.

const lionGenetics = {
  ...lionProfile,
  genetics: "Diverse",
};
console.log("Original Lion Profile: ", lionProfile);
console.log("Lion Genetics Profile: ", lionGenetics);

/*
 * Observations:
 * TODO: Modifying the nested property in the copied object does not affect the original object. However, modifying the nested property in the original object affects the copied object. This is because the spread operator performs a shallow copy, which only copies the top-level properties of the object. Changes to nested properties are shared between the original and copied objects. Changes to properties in the copied object do not affect the original object because the copied object has a new reference in memory.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.

// const updatedEcosystemHealth = {
//   ...ecosystemHealth,
//   herbivores: "Declining",
// };
// console.log("Original Ecosystem Health: ", ecosystemHealth);
// console.log("Updated Ecosystem Health: ", updatedEcosystemHealth);

// Above, the nested property 'herbivores' is added to the copied object. However, the original object does not contain this property. The copied object still has the original foodSupply object (unchanged) from the original object, but with the added 'herbivores' property after the foodSupply object, or, in addition to the foodSupply object as a new property.

// Below I will create a shallow copy without creating a new nested object. This will affect the original object as well.

// const updatedEcosystemHealth2 = {
//   ...ecosystemHealth,
// };
// updatedEcosystemHealth2.foodSupply.herbivores = "Declining";

// console.log("Original Ecosystem Health: ", ecosystemHealth);
// console.log("Updated Ecosystem Health: ", updatedEcosystemHealth2);

// In this case, the nested property 'herbivores' is modified in the copied object. Since the copied object is a shallow copy, the nested object 'foodSupply' is shared between the original and copied objects. Therefore, changes to the nested property 'herbivores' in the copied object also affect the original object.

// Lastly, I will create a deep copy of the object to avoid this issue.

const updatedEcosystemHealth3 = {
  ...ecosystemHealth,
  foodSupply: {
    ...ecosystemHealth.foodSupply,
    herbivores: "Declining",
  },
};
console.log("Original Ecosystem Health: ", ecosystemHealth);
console.log("Updated Ecosystem Health: ", updatedEcosystemHealth3);

// Here we created a copy of not only the top-level properties but also the nested object 'foodSupply'. By creating a deep copy, changes to the nested property 'herbivores' in the copied object do not affect the original object.

/*
 * Observations:
 * TODO: To summarize my findings in Task 5, when performing a shallow copy, changes to nested properties affect both the original and copied objects. This is because the nested properties are shared between the original and copied objects. To avoid this issue, a deep copy can be created by copying the nested properties as well. This ensures that changes to nested properties in the copied object do not affect the original object.
 */
