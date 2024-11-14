import '../styles/testimonials.css';

type ProfileTestimonailsProps = {
    quote: string
    imageSrc: string,
    alt: string,
    profileName: string,
    profileRole: string
}

export const ProfileTestimonials = ({ quote, imageSrc, alt, profileName, profileRole }: ProfileTestimonailsProps) => {
    return (
        <>
            <blockquote className="quote">
                <p>{quote}</p>
            </blockquote>
            <div className="profile">
                <img
                    src={imageSrc}
                    alt={alt}
                    className="profile-image"
                />
                <div>
                    <p className="profile-name">{profileName}</p>
                    <p className="profile-role">{profileRole}</p>
                </div>
            </div>
        </>
    )
}