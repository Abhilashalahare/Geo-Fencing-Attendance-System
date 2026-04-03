import asyncHandler from 'express-async-handler';
import Geofence from '../models/Geofence.js';


const createGeofence = asyncHandler(async (req, res) => {
  const { name, center, radiusMeters } = req.body;

  const geofence = new Geofence({
    name,
    center,
    radiusMeters,
  });

  const createdGeofence = await geofence.save();
  res.status(201).json(createdGeofence);
});


const listGeofences = asyncHandler(async (req, res) => {
  const geofences = await Geofence.find({});
  res.json(geofences);
});

export { createGeofence, listGeofences };
