import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe: React.FC = () => {
const [formData, setFormData] = useState({
    title: '',
    category: '',
    ingredients: '',
    instructions: '',
    image_url: '',
});

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    console.log(formData);
    await axios.post('/api/recipes', formData);
    console.log(formData)
    alert('Recipe added successfully');
    } catch (error) {
    alert('Error adding recipe');
    }
};

return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Title" onChange={e => setFormData({ ...formData, title: e.target.value })} />
    <input type="text" placeholder="Category" onChange={e => setFormData({ ...formData, category: e.target.value })} />
    <textarea placeholder="Ingredients" onChange={e => setFormData({ ...formData, ingredients: e.target.value })} />
    <textarea placeholder="Instructions" onChange={e => setFormData({ ...formData, instructions: e.target.value })} />
    <input type="text" placeholder="Image URL" onChange={e => setFormData({ ...formData, image_url: e.target.value })} />
    <button type="submit">Add Recipe</button>
    </form>
);
};

export default AddRecipe;