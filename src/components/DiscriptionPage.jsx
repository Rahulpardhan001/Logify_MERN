import { FormInput } from "./Form";

// DescriptionPage.js
const DescriptionPage = ({ formData, handleChange }) => {
    return (
      <FormInput
        label="Description"
        name="Discription"
        value={formData.Discription}
        onChange={handleChange}
        placeholder="Enter your Description"
        required
      />
    );
  };
  
  export default DescriptionPage;
  