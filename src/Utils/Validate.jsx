export const checkValidation = (email, password, fullName = "", isSignUp = false) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const fullNameRegex = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
  
    if (!emailRegex.test(email)) {
      return "Invalid email format";
    }
  
    if (!passwordRegex.test(password)) {
      return "Password must be at least 6 characters long and contain at least one letter and one number";
    }
  
    if (isSignUp && !fullNameRegex.test(fullName)) {
      return "Full name can only contain letters, spaces, hyphens, and apostrophes";
    }
  
    return null;
  };
  