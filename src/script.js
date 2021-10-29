//imports
// import * as tf from '@tensorflow/tfjs';

console.log(tf.version);

//tensor example
const ex_tensor = tf.tensor([[["rank"],["one"],["tensor"]],[["hello"],["hey"],["hi"]]]);
console.log("shape:",ex_tensor.shape," data type:", ex_tensor.dtype, " rank:", ex_tensor.rank);

ex_tensor.print();

//changing shape
const tensor1 = tf.ones([1,2,3]); // ones creates a 1 tensor
const tensor2 = tf.reshape(tensor1,[3,2,1]); //3x2x1 = 1x2x3
const tensor3 = tf.reshape(tensor1,[-1]);//-1 ==> Automatically defines the dimension should be
const tensor4 = tf.reshape(tensor1,[2,-1]);
tensor1.print();
tensor2.print();
tensor3.print();
tensor4.print();

