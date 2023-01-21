import {Link} from "react-router-dom";

export const navigationBarItems = [
    {
        title: 'About',
        url: '/about',
        // submenu : [
        //     {
        //         key: '1',
        //         label: (
        //             <Link target="_blank" rel="noopener noreferrer" to={"/salon"}>
        //                The Salon
        //             </Link>
        //         ),
        //     },
        //     {
        //         key: '2',
        //         label: (
        //             <Link target="_blank" rel="noopener noreferrer" to={"/media"}>
        //                 Social Media
        //             </Link>
        //         ),
        //     },
        // ],
    },
    {
        title: 'Services',
        url: '/services',
        submenu : [
            {
                key: '1',
                label: (
                    <Link rel="noopener noreferrer" to={"/services?scrollTo=hair"}>
                        Hair
                    </Link>
                ),
            },
            {
                key: '2',
                label: (
                    <Link  rel="noopener noreferrer" to={"/services?scrollTo=nails"}>
                       Nails
                    </Link>
                ),
            },

            {
                key: '3',
                label: (
                    <Link  rel="noopener noreferrer" to={"/services?scrollTo=makeup"}>
                        MakeUp
                    </Link>
                ),
            },
            {
                key: '4',
                label: (
                    <Link  rel="noopener noreferrer" to={"/services?scrollTo=wax"}>
                        Wax It
                    </Link>
                ),
            },
        ],
    },
    {
        title: 'Artists',
        url: '/artists',
    },
    {
        title: 'Contact Us',
        url: '/contact',
    },
    {
        title: 'Book Now',
        url: '/book',
    },
];