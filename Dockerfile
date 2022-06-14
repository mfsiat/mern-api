FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
RUN npm install

# Copy in the source code 
COPY . .

# Don't use root user
USER node

# Expose Port
EXPOSE 5555

# Run the app
CMD ["npm", "run", "dev"]
