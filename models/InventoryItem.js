const { Schema, model } = require('mongoose');

const inventoryItemSchema = new Schema({
  skuCode: {
    type: String,
    required: true,
    trim: true
  },
  cost: {
    type: Number,
    required: true,
    min: 0
  },
  merchandiseTier: {
    type: String,
    required: true,
    enum: ['Bronze', 'Silver', 'Gold', 'Platinum']
  },
  availableUnits: {
    type: Number,
    required: true,
    default: 1
  }
});

const InventoryItem = model('InventoryItem', inventoryItemSchema);
module.exports = InventoryItem;
