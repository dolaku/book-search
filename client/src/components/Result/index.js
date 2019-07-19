import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <div className="mb-3">
                <div class="card text-left">
                    <div class="card-body">
                        <div class="media">
                            <img src="https://picsum.photos/id/1032/200/200" class="align-self-start mr-3" alt="..." />
                            <div class="media-body">
                                <h4 class="mt-0">Book Title</h4>
                                <h6>Author: First Lastname</h6>
                                <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;