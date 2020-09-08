import React from 'react'

function ReadMe() {
    const img_block = {
        height: '250px',
        background: '#6A696B',
        position: 'relative'
    }
    const date_block = {
        position: 'absolute',
        top: '0',
        left: '0',
        background: '#000',
        padding: '10px 27px',
        color: '#fff'
    }
    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-center"><b>READ ME</b></h1>
            <p className="text-center">sometimes i write something smart</p>
            <div className="row">
                <div className="col-md-4 col-sm-6 col-12 mb-3">
                    <div style={img_block}>
                        <span style={date_block}>
                            10 <br /> jan
                        </span>
                    </div>
                    <div>
                        <h4>TEN THE BEST APP IN 2017</h4>
                        <p>CATEGORY</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries
                        </p>
                        <div className="text-center">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 mb-3">
                    <div style={img_block}>
                        <span style={date_block}>
                            10 <br /> jan
                        </span>
                    </div>
                    <div>
                        <h4>TEN THE BEST APP IN 2017</h4>
                        <p>CATEGORY</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries
                        </p>
                        <div className="text-center">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 mb-3">
                    <div style={img_block}>
                        <span style={date_block}>
                            10 <br /> jan
                        </span>
                    </div>
                    <div>
                        <h4>TEN THE BEST APP IN 2017</h4>
                        <p>CATEGORY</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries
                        </p>
                        <div className="text-center">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                    
                </div>
                <div className="text-right w-100">
                        <a href="">See more posts</a>
                    </div>
            </div>
        </div>
    )
}

export default ReadMe
