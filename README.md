# superVision – Intelligent Anomaly Detection for Real-Time Security

> "superVision doesn't just watch the world — it protects it."

Every moment, somewhere in the world, violence breaks out — a fight in a school corridor, a road accident on a highway, or even an act of arson in a public space.  
The question is — will someone notice in time?
We built a system that does.

---

## ❗ The Problem

Most surveillance systems are just passive witnesses.  
They *see everything — but act on nothing.*  
And by the time a human watches the footage, the damage is already done.

---

## ✅ The Solution

*Introducing superVision* — an intelligent real-time anomaly detection system that watches through a camera lens and instantly recognizes violent or abnormal events like:

- 🔥 Arson  
- 🥊 Fighting & Assault  
- 🚗 Road Accidents  
- 🧱 Vandalism  
- ...and more — all trained from real-world data

---

##  How It Works

 superVision analyzes every video frame in real time and classifies it as either *normal* or *anomalous*.

📩 When violence or abnormal activity is detected, the system sends *instant SMS and email alerts* to pre-registered users or authorities, including:

- 📸 Captured frame  
- 📍 Location (customizable)  
- ⏰ Timestamp of the event  

This ensures that help arrives faster than ever.

---

## 🧰 Tech Stack

 Component        Tech Used                         
|---------------------------------------------------|
 🎯 Model         ResNet-50 (CNN architecture)       
 📦 Dataset       UCF-Crime (13 real-world anomalies)
 🖥 Backend        Python + Flask                     
 📲 Alerts         Twilio (SMS), SMTP (Email)         
 📹 Deployment     Live CCTV or Webcam-compatible     

---

## 🏛 Use Cases

superVision can be deployed in:

- 🏫 School and college campuses  
- 🚌 Public transportation hubs  
- 🛣 Highways and parking lots  
- 🏙 Smart city surveillance systems  
- 🏘 Residential communities

---

## 🌍 Impact

This isn't just about detection —  
It’s about *saving time, lives, and property*.  
In security, *every second matters*.  
*superVision responds in milliseconds.*

---

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/superVision.git
cd superVision

# Install dependencies
pip install -r requirements.txt
