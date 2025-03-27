// Please don't change the pre-written code
// Import the necessary modules here

import { ObjectId } from "mongodb";
import {getClient, getDB } from "../../config/mongodb.js";

const collectionName = "students";

class studentRepository {
  async addStudent(studentData) {
    const db = getDB();
    await db.collection(collectionName).insertOne(studentData);
  }

  async getAllStudents() {
    const db = getDB();
    const students = await db.collection(collectionName).find({}).toArray();
    return students;
  }

  //You need to implement methods below:
  // Start Writing your code
  async createIndexes() {
    const db = getDB();
    await db.collection(collectionName).createIndex({name:1});
    await db.collection(collectionName).createIndex({age:1,grade:-1});
    console.log("Index is created");
  }

  async getStudentsWithAverageScore() {
    const db = getDB();
    const result = await db.collection(collectionName).aggregate([
      {$unwind:"$assignments"},
      {
        $group: {_id:"$name",averageScore:{$avg:"$assignments.score"}}
      }
    ]).toArray();
    console.log(result);
    return result;
  }

  async getQualifiedStudentsCount() {
    try{
      const db = getDB();
      return db.collection(collectionName).countDocuments({
        age: { $gt: 9 },
        grade: { $lte: "B" },
        assignments: {
          $elemMatch: {
            title: "math",
            score: { $gte: 60 }
          }
        }
      });
    }catch(err){
      console.log(err);
    }
  }

  async updateStudentGrade(studentId,extraCreditPoints) {
    const session = client.startSession();
  try {
    await session.withTransaction(async () => {
      const database = client.db("your_database_name"); // Replace with your database name
      const studentsCollection = database.collection("students");
      
      // Update assignment score
      await studentsCollection.updateOne(
        { _id: studentId },
        { $inc: { "assignments.$.score": extraCredit } },
        { session }
      );
      
      // Fetch updated student data
      const student = await studentsCollection.findOne({ _id: studentId }, { session });
      if (!student || !student.assignments.length) return;
      
      // Calculate new average score
      const totalScore = student.assignments.reduce((sum, a) => sum + a.score, 0);
      const averageScore = totalScore / student.assignments.length;
      
      // Determine new grade
      let newGrade;
      if (averageScore >= 90) newGrade = "A";
      else if (averageScore >= 80) newGrade = "B";
      else if (averageScore >= 70) newGrade = "C";
      else if (averageScore >= 60) newGrade = "D";
      else newGrade = "F";
      
      // Update student grade
      await studentsCollection.updateOne(
        { _id: studentId },
        { $set: { grade: newGrade } },
        { session }
      );
    });
    console.log("Student grade updated successfully");
  }catch(err){
      console.log(err);
    }
  }
}

export default studentRepository;
