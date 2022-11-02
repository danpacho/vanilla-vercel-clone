import { Component } from "../../core"
import { ActiveCard } from "../active.card/index.js"
import { Box, Text } from "../atoms/index.js"
import { Section } from "./section.js"

const SecondSection = () => {
    const SectionActiveCard2 = () =>
        ActiveCard({
            logo: '<svg aria-labelledby="turbo-logo-title" fill="none" height="96" role="img" viewBox="0 0 96 96" width="96" xmlns="http://www.w3.org/2000/svg" style="position: relative;"><title id="turbo-logo-title">The Turbopack logo. A dark hexagon with a grey border surrounds another hexagon, this one colored with a gradient from blue to pink. That hexagon itself contains a depiction of a cube.</title><rect fill="white" height="51.2008" transform="translate(25.25 22.625)" width="44.8"></rect><path d="M42 3.4641C45.7128 1.32051 50.2872 1.32051 54 3.4641L83.5692 20.5359C87.282 22.6795 89.5692 26.641 89.5692 30.9282V65.0718C89.5692 69.359 87.282 73.3205 83.5692 75.4641L54 92.5359C50.2872 94.6795 45.7128 94.6795 42 92.5359L12.4308 75.4641C8.71797 73.3205 6.43078 69.359 6.43078 65.0718V30.9282C6.43078 26.641 8.71797 22.6795 12.4308 20.5359L42 3.4641Z" fill="black"></path><path clip-rule="evenodd" d="M47.65 22.625L33.328 30.8094L33.356 37.241L47.65 29.0734L64.45 38.6746L70.05 41.875V35.4238L47.65 22.625ZM45.13 65.9354L30.85 57.7762V38.6886L30.8444 38.6858L30.8136 32.2458L25.25 35.4238V43.9582V52.4926V61.0242L39.544 69.1918L45.13 65.9354ZM64.45 57.7762V41.5782L70.05 44.7786V52.4926V61.0242L47.65 73.8258L42.0696 70.6366L47.65 67.383V67.3746L64.45 57.7762Z" fill="url(#paint0_linear_1766_6630)" fill-rule="evenodd"></path><path d="M33.3701 41.5894V56.3118L47.6501 64.4738V49.7486L33.3701 41.5894Z" fill="white"></path><path d="M47.6503 31.9771L34.6387 39.411L48.9215 47.573L61.9303 40.1362L47.6503 31.9771Z" fill="white"></path><path d="M53.75 3.89711L83.3192 20.9689C86.8773 23.0232 89.0692 26.8196 89.0692 30.9282V65.0718C89.0692 69.1804 86.8773 72.9768 83.3192 75.0311L53.75 92.1029C50.1919 94.1572 45.8081 94.1572 42.25 92.1029L12.6808 75.0311C9.12267 72.9768 6.93078 69.1804 6.93078 65.0718V30.9282C6.93078 26.8197 9.12267 23.0232 12.6808 20.9689L42.25 3.89711C45.8081 1.84284 50.1919 1.84284 53.75 3.89711Z" stroke="url(#paint0_radial_1766_6732)" stroke-opacity="0.15"></path><path d="M53.75 3.89711L83.3192 20.9689C86.8773 23.0232 89.0692 26.8196 89.0692 30.9282V65.0718C89.0692 69.1804 86.8773 72.9768 83.3192 75.0311L53.75 92.1029C50.1919 94.1572 45.8081 94.1572 42.25 92.1029L12.6808 75.0311C9.12267 72.9768 6.93078 69.1804 6.93078 65.0718V30.9282C6.93078 26.8197 9.12267 23.0232 12.6808 20.9689L42.25 3.89711C45.8081 1.84284 50.1919 1.84284 53.75 3.89711Z" stroke="url(#paint1_linear_1766_6732)" stroke-opacity="0.5"></path><defs><radialGradient cx="0" cy="0" gradientTransform="translate(48) rotate(90) scale(123.429)" gradientUnits="userSpaceOnUse" id="paint0_radial_1766_6732" r="1"><stop stop-color="white"></stop><stop offset="1" stop-color="white"></stop></radialGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1766_6732" x1="0" x2="21" y1="0" y2="39"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1766_6630" x1="47.6501" x2="47.5653" y1="26.6676" y2="70.4175"><stop stop-color="#0096FF"></stop><stop offset="1" stop-color="#FF1E56"></stop></linearGradient></defs></svg>',
            title: "Turbopack",
            description:
                "Intoducing the successor to Webpack,<br />written in Rust.",
            buttonText: "Try in Next.js 13",
            label: "alpha",
            type: "purple",
        })

    const SecondComponent = () =>
        new Component({
            template: `
            ${Box.Container(`
                ${Box.Label("beta")}
                ${Text.Head("700X")}
                ${Text.Bold("faster updates", "lg")}
                ${Text.P("than Webpack", "lg")}
            `)}
        `,
        }).html()
    const ThirdComponent = () =>
        new Component({
            template: `
        ${Box.Container(`
            ${Text.Bold("Ecosystem friendly", "lg")}
            ${Text.P(
                "Out-of-the-box support for TypeScript,<br />JSX, CSS and more."
            )}
        `)}
    `,
        }).html()
    const FourthComponent = () =>
        new Component({
            template: `
            ${Box.Container(`
                ${Text.Bold("Ecosystem friendly", "lg")}
                ${Text.P(
                    "Out-of-the-box support for TypeScript,<br />JSX, CSS and more."
                )}
            `)}
        `,
        }).html()
    const FifthComponent = () =>
        new Component({
            template: `
            ${Box.Container(`
                ${Text.Bold("Incremental by design", "lg")}
                ${Text.P(
                    "Only build what has changed, both locally<br />and in the cloud."
                )}
            `)}
        `,
        }).html()

    const secondId = "second-section-active-card"
    return {
        SectionTemplate2: () =>
            Section({
                renderId: secondId,
                second: SecondComponent(),
                third: ThirdComponent(),
                fourth: FourthComponent(),
                fifth: FifthComponent(),
            }),
        SectionActiveCard2,
        secondId,
    }
}

export { SecondSection }
