import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,6) }

export default function ReportLostPet({ onSubmit }){
  const [name,setName] = useState('');
  const [breed,setBreed] = useState('');
  const [location,setLocation] = useState('');
  const [gender,setGender] = useState('Male');
  const [pregnant,setPregnant] = useState('No');
  const [desc,setDesc] = useState('');
  const [contact,setContact] = useState('');
  const [image,setImage] = useState('');
  const [errors,setErrors] = useState({});
  const navigate = useNavigate();

  function handleImage(e){
    const file = e.target.files?.[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = ()=> setImage(reader.result);
    reader.readAsDataURL(file);
  }

  function validate(){
    const e = {};
    if(!name.trim()) e.name = 'Required';
    if(!breed.trim()) e.breed = 'Required';
    if(!location.trim()) e.location = 'Required';
    if(!desc.trim()) e.desc = 'Required';
    if(!contact.trim() || !/^\d{7,15}$/.test(contact.trim())) e.contact = 'Enter valid number';
    if(!image) e.image = 'Upload image';
    setErrors(e);
    return Object.keys(e).length===0;
  }

  function submit(e){
    e.preventDefault();
    if(!validate()) return;
    const report = { id: uid(), type:"lost", name:name.trim(), breed:breed.trim(), location:location.trim(), gender, pregnant: gender==="Female"?pregnant:"N/A", description:desc.trim(), contact:contact.trim(), image, createdAt:new Date().toISOString() };
    onSubmit(report);
    setName(''); setBreed(''); setLocation(''); setGender('Male'); setPregnant('No'); setDesc(''); setContact(''); setImage(''); setErrors({});
    navigate('/');
  }

  return (
    <form className="form" onSubmit={submit}>
      <h2>Report Lost Pet</h2>
      <label>Pet Name<input value={name} onChange={e=>setName(e.target.value)} /></label>
      {errors.name && <div className="err">{errors.name}</div>}
      <label>Breed<input value={breed} onChange={e=>setBreed(e.target.value)} /></label>
      {errors.breed && <div className="err">{errors.breed}</div>}
      <label>Location<input value={location} onChange={e=>setLocation(e.target.value)} /></label>
      {errors.location && <div className="err">{errors.location}</div>}
      <label>Gender<select value={gender} onChange={e=>setGender(e.target.value)}><option>Male</option><option>Female</option></select></label>
      {gender==="Female" && <label>Is Pregnant?<select value={pregnant} onChange={e=>setPregnant(e.target.value)}><option>No</option><option>Yes</option></select></label>}
      <label>Description<textarea value={desc} onChange={e=>setDesc(e.target.value)} /></label>
      {errors.desc && <div className="err">{errors.desc}</div>}
      <label>Contact Number<input value={contact} onChange={e=>setContact(e.target.value)} /></label>
      {errors.contact && <div className="err">{errors.contact}</div>}
      <label>Upload Image<input type="file" accept="image/*" onChange={handleImage} /></label>
      {errors.image && <div className="err">{errors.image}</div>}
      <button type="submit" className="btn">Submit</button>
    </form>
  )
}
