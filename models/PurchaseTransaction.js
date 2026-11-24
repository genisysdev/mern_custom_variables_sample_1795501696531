const { Schema, model } = require('mongoose');

const purchaseTransactionSchema = new Schema({
  buyerReference: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: true
  },
  billingTotal: {
    type: Number,
    required: true
  },
  fulfillmentStage: {
    type: String,
    required: true,
    enum: ['Created', 'Processing', 'Dispatched', 'Closed'],
    default: 'Created'
  }
});

const PurchaseTransaction = model('PurchaseTransaction', purchaseTransactionSchema);
module.exports = PurchaseTransaction;
