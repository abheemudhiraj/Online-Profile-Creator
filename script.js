document.getElementById("profileForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const qualification = document.getElementById("qualification").value;
  const bio = document.getElementById("bio").value;

  const selectedFile = document.getElementById("profile-pic").files[0];

  const profileData = {
    fullName: fullName,
    email: email,
    qualification: qualification,
    bio: bio,
    profilePic: selectedFile
  };

  displayProfile(profileData);
});

function displayProfile(profile) {
  const profileDisplay = document.getElementById("profileDisplay");
  profileDisplay.innerHTML = `
    <h2>Profile</h2>
    
    <img src="${URL.createObjectURL(profile.profilePic)}" alt="Profile Picture">
    <p><strong>Name:</strong> ${profile.fullName}</p>
    <p><strong>Email:</strong> ${profile.email}</p>
    <p><strong>Qualification:</strong> ${profile.qualification}</p>
    <p><strong>Bio:</strong> ${profile.bio}</p>
 
    
  `;
}

