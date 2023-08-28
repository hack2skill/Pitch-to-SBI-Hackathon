import gradio as gr
import pytesseract
import openai
import datetime

# Set your OpenAI API key
openai.api_key = "----ENTER YOUR OPENAI API KEY HERE----"

# Define the model
def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0,
    )
    return response.choices[0].message["content"]

def analyze_sms_fraud(input_text_or_image):
    
    sms_text = pytesseract.image_to_string(input_text_or_image)
    
    # Generate prompt for LangChain
    fraud_sms_prompt = f"""
    A user received the SMS message in triple backticks from someone claiming to be their bank,
    Verify what information is being asked from the user. You can do it in following steps:
    Step 1: Read the SMS message and identify if there is any the bank name.
    Step 2: Identify is there is request for any personal information/ request for KYC etc.
    Step 3: Identify if there is any request for OTP or PIN.
    Step 4: Identify if there is any link in the SMS message and the link is secure or not.
    Step 5: Identify if there is any request for money transfer.
    Based on the above steps, identify if the SMS message is a fraud or not.
    SMS message: ```{sms_text}```
    """

    # Get fraud detection result from LangChain
    detected_fraud = get_completion(fraud_sms_prompt)

    return sms_text, detected_fraud


input_image = gr.inputs.Image(label="Input SMS Image")


iface = gr.Interface(
    fn=analyze_sms_fraud,
    inputs= input_image,
    outputs=[
        gr.outputs.Textbox(label="SMS Text"),
        gr.outputs.Textbox(label="Detected Fraud Result")
    ],
    title="SMS Fraud Detection",
    description="Analyze an SMS message for potential fraud using LangChain and OpenAI's GPT-3."
)

iface.launch()
