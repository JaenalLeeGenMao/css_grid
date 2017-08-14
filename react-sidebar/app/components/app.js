var React = require('react')
var FontAwesome = require('react-fontawesome')
import { UncontrolledTooltip  } from 'reactstrap'
require('../css/customscrollbar.css')
require('../css/simple-sidebar.css')
require('../css/index.css')
var $ = require('../js/jquery')

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            show: false
        }
    }

    componentDidMount() {
        var newDate = new Date();
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        var day = newDate.getDate();
        var monthIndex = newDate.getMonth();
        var year = newDate.getFullYear();
        document.getElementById("page-title").innerHTML = days[newDate.getDay()] + ", " + newDate.getDate() + " " + monthNames[monthIndex] + " " + year;

        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            $("#toggleSidebar").toggleClass("fa-chevron-right");
            $("#toggleSidebar").toggleClass("fa-chevron-left");
        });
    }
    render() {
        return (
            <div>
                <div id="wrapper">

                    <div id="sidebar-wrapper">
                        <ul className="sidebar-nav">
                            <li className="sidebar-brand">
                                <a href="#">
                                <FontAwesome className="sidebar-logo" name="inbox"/>
                                <span className="sidebar-text"> Company </span>
                                </a>
                            </li>
                            <li>
                                <a href="#"><FontAwesome className="sidebar-logo" name="th"/> Dashboard</a>
                            </li>
                            <li>
                                <a href="#"><FontAwesome className="sidebar-logo" name="share"/> Shortcuts</a>
                            </li>
                            <li>
                                <a href="#"><FontAwesome className="sidebar-logo" name="bar-chart"/> Overview</a>
                            </li>
                            <li>
                                <a href="#"><FontAwesome className="sidebar-logo" name="calendar"/> Events</a>
                            </li>
                            <li>
                                <a href="#"><FontAwesome className="sidebar-logo" name="exclamation-circle"/> About</a>
                            </li>
                            <li>
                                <a href="#"><FontAwesome className="sidebar-logo" name="gear"/> Services</a>
                            </li>
                            <li>
                                <a href="#"><FontAwesome className="sidebar-logo" name="vcard"/> Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div id="page-content-wrapper">
                        <div className="site">
                            <header className="header">
                                <img id="image" src="http://widefon.com/_ld/229/97762885.jpg"/>
                            </header>
                            <h1 id="page-title" className="page-title"></h1>
                            <main className="main-content">
                                <div className="navbar">
                                    <a href="#menu-toggle" id="menu-toggle" data-toggle="tooltip" onClick={() => this.setState({ show: !this.state.show })}>
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-square-o fa-stack-2x"></i>
                                        <i id="toggleSidebar" className="fa fa-chevron-right fa-stack-1x"></i>
                                    </span>
                                    </a>
                                    <UncontrolledTooltip  placement="right" target="menu-toggle">
                                        {this.state.show ? "Hide": "Show"}
                                    </UncontrolledTooltip >
                                </div>
                                <ul className="unstyled">
                                    <li>
                                        <h2 className="talk-title">Affogato</h2>
                                        <p className="talk-speaker">An affogato (Italian, "drowned") is a coffee-based dessert. It usually takes the form of a scoop of vanilla gelato or ice cream topped or "drowned" with a shot of hot espresso. Some variations also include a shot of amaretto, Bicerin or other liqueur. It is considered one drink, not a combination of coffee and ice cream</p>
                                        <p className="talk-time">$3.90</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Americano</h2>
                                        <p className="talk-speaker">An Americano is an espresso-based drink designed to resemble coffee brewed in a drip filter, considered popular in the United States of America.</p>
                                        <p className="talk-time">$1.70</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Bicerin</h2>
                                        <p className="talk-speaker">Bicerin is a traditional warm coffee concoction native to Turin, Italy, made of espresso, drinking chocolate and whole milk served layered in a small rounded glass.</p>
                                        <p className="talk-time">2.30</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Breve</h2>
                                        <p className="talk-speaker">Caffe Breve is an American variation of a latte: a milk-based espresso drink using steamed half-and-half mixture of milk and cream instead of milk.</p>
                                        <p className="talk-time">$1.60</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Cafe Bombon</h2>
                                        <p className="talk-speaker">Cafe Bombon was made popular in Valencia, Spain, and spread gradually to the rest of the country. It might have been re-created and modified to suit European tastebuds as in many parts of Asia such as Malaysia, Thailand and Singapore the same recipe for coffee which is called "Kopi Susu Panas" (Malaysia) or "Kafe Ron" (Thailand) has already been around for decades and is very popular in "mamak" stalls or "kopitiams" in Malaysia.</p>
                                        <p className="talk-time">$1.10</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Coffee Cream</h2>
                                        <p className="talk-speaker">coffee cream is a long espresso drink primarily served in southern Switzerland and Austria and northern Italy (1980s onwards), along the Italian/Swiss and Italian/Austrian border.</p>
                                        <p className="talk-time">$1.30</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Coffee Latte</h2>
                                        <p className="talk-speaker">Coffee latte is a coffee drink made with espresso and steamed milk.</p>
                                        <p className="talk-time">$1.70</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Coffee Milk</h2>
                                        <p className="talk-speaker">Coffee milk is a drink similar to chocolate milk; however, instead of chocolate syrup, coffee syrup is used. It is the official state drink of Rhode Island.</p>
                                        <p className="talk-time">$1.90</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Coffee Mocha</h2>
                                        <p className="talk-speaker">Caffè Mocha or café mocha, is an American invention and a variant of a caffe latte, inspired by the Turin coffee beverage Bicerin.</p>
                                        <p className="talk-time">$2.40</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Cappuchino</h2>
                                        <p className="talk-speaker">A cappuccino is a coffee-based drink made primarily from espresso and milk.</p>
                                        <p className="talk-time">$2.90</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Carajillo</h2>
                                        <p className="talk-speaker">Carajillo is a Spanish drink combining coffee with brandy or rum.</p>
                                        <p className="talk-time">$2.40</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Cuban Espresso</h2>
                                        <p className="talk-speaker">Café Cubano (Cuban coffee, Cuban espresso, cafecito, Cuban pull, Cuban shot) is a type of espresso which originated in Cuba after espresso machines were first imported there from Italy.</p>
                                        <p className="talk-time">$2.90</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Espresso</h2>
                                        <p className="talk-speaker">Espresso is the name of a highly concentrated, bittersweet coffee originating in Italy in the early 20th century.</p>
                                        <p className="talk-time">$2.80</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Frappucinno</h2>
                                        <p className="talk-speaker">Frappuccino is a portmanteau of frappe and cappuccino, an espresso coffee with frothed milk.</p>
                                        <p className="talk-time">$3.10</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Galao</h2>
                                        <p className="talk-speaker">Galão is a hot coffee drink from Portugal made of espresso and foamed milk.</p>
                                        <p className="talk-time">$2.20</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">White Coffee</h2>
                                        <p className="talk-speaker">White Coffee is a coffee beverage from Australia and New Zealand.</p>
                                        <p className="talk-time">$1.90</p>
                                    </li>
                                    <li>
                                        <h2 className="talk-title">Yuan Yang</h2>
                                        <p className="talk-speaker">Yuanyang or "coffee with tea" is a popular beverage in Hong Kong, made of a mixture of coffee and Hong Kong-style milk tea</p>
                                        <p className="talk-time">$2.00</p>
                                    </li>

                                </ul>
                            </main>
                            <aside className="side-bar">
                                <ul className="unstyled">
                                    <li className="ally">
                                        <h2 className="info-heading">Accessibility and Inclusivity</h2>
                                    </li>
                                    <li className="coc">
                                        <h2 className="info-heading">Code of Conduct</h2>
                                    </li>
                                    <li className="contact">
                                        <h2 className="info-heading">Contact</h2>
                                    </li>
                                    <li className="faq">
                                        <h2 className="info-heading">Frequently Asked Questions</h2>
                                    </li>
                                </ul>
                            </aside>
                            <footer className="footer">
                                <h2 className="talk-title">Coffee Lovers(Taste original)</h2>
                                <p className="talk-speaker">Jaenal Lee</p>

                                <a href="https://Facebook.com/jaenallee">
                                    <FontAwesome name="facebook" className="facebook" />
                                </a>
                                <a href="https://twitter.com/jaenalleegenmao">
                                    <FontAwesome name="twitter" className="twitter"/>
                                </a>
                                <a href="https://github.com/JaenalLeeGenMao">
                                    <FontAwesome name="github" className="github"/>
                                </a>
                                <p>Follow @jaenalleegenmao</p>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = App
