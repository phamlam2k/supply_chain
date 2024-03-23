# Sử dụng một image node phiên bản LTS (Long Term Support) làm cơ sở
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

ENV NEXT_PUBLIC_ENV_VARIABLE="https://payment.newdigitaltechagency.com"
ENV NEXT_PUBLIC_RECATPCHA_SITE_KEY="6LdDWl4pAAAAAIHOi-t7VU8_GSBe7jzXGweI50i_"
ENV ANALYZE="false"

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN pnpm install

# Copy the local project files to the container
COPY . .

# Build the front-end
RUN pnpm run build

# Expose cổng mặc định của Next.js
EXPOSE 3000

# Specify the command to run on container start
CMD [ "pnpm", "start" ]