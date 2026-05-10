function Form({ formData, setFormData }) {

const handleChange = (e) => {

  if (e.target.type === "file") {

    const file = e.target.files[0]

    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file)
      })
    }

  } else {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }
}
  return (
    <div className="backdrop-blur-lg bg-white/70 border border-white/40 p-6 rounded-2xl shadow-xl w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Enter Details
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="job"
          placeholder="Job Title"
          value={formData.job}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

<select
  name="theme"
  value={formData.theme}
  onChange={handleChange}
  className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="blue">Blue Professional</option>
  <option value="dark">Dark Elegant</option>
  <option value="green">Green Modern</option>
</select>




<div>
  <label className="block mb-2 font-medium">
    Upload Profile / Logo
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={handleChange}
    className="w-full border p-3 rounded-lg bg-white"
  />
</div>
      </div>
    </div>
  )
}

export default Form