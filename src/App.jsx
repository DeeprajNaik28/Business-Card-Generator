import { useRef, useState } from "react"
import Form from "./components/Form"
import CardPreview from "./components/CardPreview"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

function App() {

const [formData, setFormData] = useState({
  name: "",
  job: "",
  phone: "",
  email: "",
  company: "",
  image: "",
  theme: "blue",
})

  const cardRef = useRef()

  const downloadPDF = async () => {

    if (!cardRef.current) return

    try {

      const canvas = await html2canvas(cardRef.current, {
        scale: 2
      })

      const imgData = canvas.toDataURL("image/png")

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [400, 220]
      })

      pdf.addImage(imgData, "PNG", 0, 0, 400, 220)

      pdf.save("business-card.pdf")

    } catch (error) {
      console.log(error)
    }
  }


const downloadPNG = async () => {

  if (!cardRef.current) return

  const canvas = await html2canvas(cardRef.current, {
    scale: 2
  })

  const image = canvas.toDataURL("image/png")

  const link = document.createElement("a")

  link.href = image
  link.download = "business-card.png"

  link.click()
}


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 px-4 py-8 md:px-10">

      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-blue-700">
        Business Card Generator
      </h1>

      <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

        <Form
          formData={formData}
          setFormData={setFormData}
        />

        <CardPreview
          formData={formData}
          cardRef={cardRef}
        />

      </div>

     <div className="flex justify-center gap-4 mt-10 flex-wrap">

  <button
    onClick={downloadPDF}
    className="backdrop-blur-lg bg-blue-600/90 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300"
  >
    Download PDF
  </button>

  <button
    onClick={downloadPNG}
className="backdrop-blur-lg bg-green-600/90 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300"
  >
    Download PNG
  </button>

</div>

    </div>
  )
}

export default App