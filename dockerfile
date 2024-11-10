# Base image
FROM node:18

# Set the working directory
WORKDIR /app

# Step 1: Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Step 2: Install dependencies
RUN npm install --legacy-peer-deps

# Step 3: Copy all project files into the container
COPY . .

# Step 4: Build the Next.js project for production
RUN npm run build

# Step 5: Install 'serve' to serve the Next.js project
RUN npm install -g serve

# Step 6: Expose the port the app runs on
EXPOSE 3000

# Step 7: Command to run the app
CMD ["serve", "-s", "out"]
# Alternatively, if you're using Next.js, you might also want to directly use Next's built-in server:  
# CMD ["npm", "start"]  