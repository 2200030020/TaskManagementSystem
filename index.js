const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');
const nodemailer = require('nodemailer');
const userRoutes =  require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));

connectDB();

app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

app.post('/sendemail', async (req, res) => {
  const { to, subject, text } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

// Edit task route
app.put('/api/tasks/:id', (req, res) => {
  // Your edit task logic here
  const taskId = req.params.id;
  // Retrieve updated task details from req.body
  const updatedTaskDetails = req.body;
  // Implement your database update logic
  // Example: Update task in database based on taskId and updatedTaskDetails
  // Send appropriate response based on success or failure
  res.send(`Task with ID ${taskId} has been updated successfully`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
