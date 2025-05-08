import { body, validationResult } from 'express-validator';

export const validateAnalysis = [
  body('lowerLimit').isNumeric(),
  body('upperLimit').isNumeric(),
  body('values').isArray({ min: 1 }),
  body('values.*').isNumeric(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  }
];
