// const express = require('express');
import express from 'express';
// const cors = require('cors');
import cors from 'cors';
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
// const jwt = require('jsonwebtoken');
// const { query } = require('express');
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(express.json());
app.use(cors());


const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.molyssj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
  try {
    const postsCollection = client.db('opbook').collection('posts');
   
    const usersCollection = client.db('doctorsPortal').collection('users');


    // app.get('/appoinmentOptions', async (req, res) => {
    //   const date = req.query.date;
    //   const query = {};
    //   const options = await appointmentOptionsCollection.find(query).toArray();
    //   const bookingQuery = { selectedDate: date };
    //   const alreeadyBooked = await bookingsCollection.find(bookingQuery).toArray();
    //   options.forEach(option => {
    //     const optionBooked = alreeadyBooked.filter(book => book.treatment === option.name);
    //     const bookedSlots = optionBooked.map(book => book.slot)
    //     const remainingSlots = option.slots.filter(slot => !bookedSlots.includes(slot));
    //     option.slots = remainingSlots;
    //   })
    //   res.send(options);
    // });


    // app.get('/users', async (req, res) => {
    //   const query = {}
    //   const user = await usersCollection.find(query).toArray();
    //   res.send(user);
    // })


    // app.get('/bookings', verifyJWT, async (req, res) => {
    //   const email = req.query.email;
    //   console.log(email);
    //   const decodedEmail = req.decoded.email;
    //   const query = { email: email };
    //   if (email !== decodedEmail) {
    //     return res.status(403).send({ message: 'forbidden access' });
    //   }
    //   const result = await bookingsCollection.find(query).toArray();
    //   res.send(result);
    // });


    // app.get('/jwt', async (req, res) => {
    //   const email = req.query.email;
    //   const query = { email: email };
    //   const user = await usersCollection.findOne(query);
    //   if (user) {
    //     const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
    //     return res.send({ accessToken: token });
    //   }
    //   res.status(403).send({ accessToken: '' });
    // });


    // app.get('/users/admin/:email', async (req, res) => {
    //   const email = req.params.email;
    //   const filter= {email}
    //   const user = await usersCollection.findOne(filter);
    //   res.send({isAdmin: user?.role =='admin'});
    // })


    // app.post('/bookings', async (req, res) => {
    //   const booking = req.body;
    //   const query = {
    //     selectedDate: booking.selectedDate,
    //     treatment: booking.treatment,
    //     email: booking.email
    //   }
    //   const alreadyBooked = await bookingsCollection.find(query).toArray();
    //   if (alreadyBooked.length) {
    //     const message = `you have already booked on ${booking.selectedDate}`;
    //     return res.send({ acknowledged: false, message })
    //   }
    //   const result = await bookingsCollection.insertOne(booking);
    //   res.send(result);
    // });


    // app.post('/users', async (req, res) => {
    //   const user = req.body;
    //   // console.log(user);
    //   const result = await usersCollection.insertOne(user);
    //   res.send(result);
    // });


    // app.put('/users/admin/:id',verifyJWT, async (req, res) => {
    //   const id = req.params.id;
    //   const decodedEmail=req.decoded.email;
    //   const query = {email: decodedEmail};
    //   const user = await usersCollection.findOne(query);
    //   if(user.role !== 'admin'){
    //     return res.status(403).send({message:'forbidden Access'})
    //   }
    //   const filter = { _id: ObjectId(id) };
    //   const options = { upsert: true };
    //   const updatedDoc = {
    //     $set: {
    //       role: 'admin'
    //     }
    //   }
    //   const result = await usersCollection.updateOne(filter, updatedDoc, options);
    //   res.send(result);
    // })


  }
  finally {

  }

}
run().catch(console.log);


app.get('/', async (req, res) => {
  res.send('opbook server is running')
})

app.listen(port, () => console.log(`opbook running ${port}`));