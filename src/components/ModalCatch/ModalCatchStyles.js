import styled from '@emotion/styled'

export const Heading = styled.h3`
	font-size: 2rem;
	line-height: 1.1;
	font-weight: 600;
    text-transform: uppercase;
	color: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;