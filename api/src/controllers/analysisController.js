import { computeStats } from '../services/statisticsService.js';

export function calculate(req, res, next) {
  try {
    const { lowerLimit, upperLimit, values } = req.body;
    const result = computeStats(values, lowerLimit, upperLimit);
    res.json(result);
  } catch (err) {
    next(err);
  }
}