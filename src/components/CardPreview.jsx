import {
  FaPhone,
  FaEnvelope,
  FaBuilding
} from "react-icons/fa"

function CardPreview({ formData, cardRef }) {

  let cardStyle = {}

  if (formData.theme === "blue") {
    cardStyle = {
      background: "linear-gradient(to right, #2563eb, #4338ca)"
    }
  }

  if (formData.theme === "dark") {
    cardStyle = {
      background: "linear-gradient(to right, #111827, #000000)"
    }
  }

  if (formData.theme === "green") {
    cardStyle = {
      background: "linear-gradient(to right, #059669, #065f46)"
    }
  }

  return (
    <div className="w-full flex justify-center">

      <div
        ref={cardRef}
        className="w-full max-w-[400px] h-[220px] rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.03] hover:-translate-y-1 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
        style={cardStyle}
      >

        {/* Decorative Circles */}

        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>

        <div className="absolute -bottom-16 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>

        {/* Top Section */}

        <div className="flex justify-between items-start relative z-10">

          <div>
            <h1 className="text-3xl font-bold tracking-wide leading-tight">
              {formData.name || "Your Name"}
            </h1>

            <p className="text-lg opacity-90 mt-1">
              {formData.job || "Job Title"}
            </p>
          </div>

          {
            formData.image && (
              <img
                src={formData.image}
                alt="profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-white"
              />
            )
          }

        </div>

        {/* Bottom Section */}

        <div className="border-t border-white pt-3 space-y-2 text-sm relative z-10">

          <div className="flex items-center gap-2">
            <FaPhone />
            <p>{formData.phone || "Phone Number"}</p>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope />
            <p>{formData.email || "Email Address"}</p>
          </div>

          <div className="flex items-center gap-2">
            <FaBuilding />

            <div>
              <p className="text-xs opacity-70 uppercase">
                Company
              </p>

              <p>
                {formData.company || "Company Name"}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default CardPreview