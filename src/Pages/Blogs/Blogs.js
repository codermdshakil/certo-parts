import React from 'react';

const Blogs = () => {
    return (
        <div className='md:px-20 px-10'>
            <h2 className='text-2xl my-4  font-bold text-center py-3'> <span className='text-3xl font-bold text-secondary'>Q</span>uestion and <span className='text-3xl font-bold text-primary'>A</span>nswer</h2>
            <div className='lg:w-8/12 md:w-10/12  mx-auto'>
                <div tabindex="0" class=" mb-4 collapse collapse-arrow border border-base-300 bg-base-100 custom_shadow rounded-xl">
                    <div class="collapse-title text-xl font-medium">
                        <h5 className='text-lg'><span className='text-xl font-bold'>1.</span>  How will you improve the performance of a React Application?</h5>
                    </div>
                    <div class="collapse-content">
                        <p> <span className='text-lg font-bold'>Ans: </span>Keeping component state local where necessary. Memoizing React components to prevent unnecessary re-renders. To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. Then it checks the difference between the previous DOM representation and new DOM. Once it has done, the real DOM will update only the things that have actually changed. This makes the application faster, and there is no wastage of memory. Apply these things we can improve our React Application  performance.</p>
                    </div>
                </div>
                <div tabindex="1" class=" mb-4 collapse collapse-arrow border border-base-300 bg-base-100 custom_shadow  rounded-xl">
                    <div class="collapse-title text-xl font-medium">
                        <h5 className='text-lg'><span className='text-xl font-bold'>2.</span> What are the different ways to manage a state in a React application?</h5>
                    </div>
                    <div class="collapse-content">
                        <p> <span className='text-lg font-bold'>Ans: </span> React application is four types of states <span className='font-semibold'>Local state</span>, <span className='font-semibold'>Global state</span>, <span className='font-semibold'>Server state</span> and <span className='font-semibold'> URL state</span>. In modern React, we build our applications with functional components. Components are themselves JavaScript functions, independent and reusable bits of code. The Problem. Redux, particularly, gives the developer a single place to put all their state that seems great at first <span className='font-semibold'>Data state</span>, <span className='font-semibold'>Control state</span>, <span className='font-semibold'>Sesstion state</span>, <span className='font-semibold'>Location State</span>, <span className='font-semibold'>Consulation</span>. Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                    </div>
                </div>
                <div tabindex="2" class=" mb-4 collapse collapse-arrow border border-base-300 bg-base-100  custom_shadow rounded-xl">
                    <div class="collapse-title text-xl font-medium">
                        <h5 className='text-lg'><span className='text-xl font-bold'>3.</span> How does prototypical inheritance work?</h5>
                    </div>
                    <div class="collapse-content">
                        <p><span className='text-lg font-bold'>Ans: </span>The <span className='font-semibold'>Prototypal</span> Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Classical inheritance is limited to classes inheriting from other classes. However prototypal inheritance includes not only prototypes inheriting from other prototypes but also objects inheriting from prototypes. </p>
                    </div>
                </div>
                <div tabindex="3" class=" mb-4 collapse collapse-arrow border border-base-300 bg-base-100 custom_shadow  rounded-xl">
                    <div class="collapse-title text-xl font-medium">
                        <h5 className='text-lg'><span className='text-xl font-bold'>4.</span> Why you do not set the state directly in React?</h5>
                    </div>
                    <div class="collapse-content">
                        <p> <span className='text-lg font-bold'>Ans: </span> One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this for this we should use <span className='font-bold'> setState()</span>.When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.You will lose control of the state across all components.We use setState() cause we need to change data and when you delete a data you should update id. If you don't use setState you can't update data. For these cause we should use set state.</p>
                    </div>
                </div>
                <div tabindex="4" class=" mb-4 collapse collapse-arrow border border-base-300 bg-base-100  custom_shadow rounded-xl">
                    <div class="collapse-title text-xl font-medium">
                        <h5 className='text-lg'><span className='text-xl font-bold'>5.</span> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h5>
                    </div>
                    <div class="collapse-content">
                        <p><span className='text-lg font-bold'>Ans: </span> Use filter if you want to find all items in an array that meet a specific condition. Use find if you want to check if that at least one item meets a specific condition. <br /><br />

                            const product = [name:'apple', price:80, des:'Most apples are a little sweet and a little tart, but neither characteristic overpowers the other'];
                            <br />
                            const searchResult = product.includes('apple'); <br />
                            console.log(searchResult)
                            <br /> <br />
                        </p>
                    </div>
                </div>
                <div tabindex="5" class=" mb-4 collapse collapse-arrow border border-base-300 bg-base-100  custom_shadow rounded-xl">
                    <div class="collapse-title text-xl font-medium">
                        <h5 className='text-lg'><span className='text-xl font-bold'>6.</span> What is a unit test? Why should write unit tests?</h5>
                    </div>
                    <div class="collapse-content">
                        <p><span className='text-lg font-bold'>Ans: </span>
                            Unit tests is a type of testing which is done by software developers in which the smallest testable module of an application - <span className='font-lg'>like functions</span>, procedures or interfaces - are tested to ascertain if they are fit to use.is done during the coding phase by the developers. To perform unit testing, a developer writes a piece of code (unit tests) to verify the code to be tested (unit) is correct. We should write units test cause Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;