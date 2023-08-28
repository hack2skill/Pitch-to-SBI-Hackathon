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

def analyze_sms_fraud(input_image,loan_application):
    
    salary_details = pytesseract.image_to_string(input_image)

    prompt_financial_summary = f"""
        I have extracted the information in triple backticks from an Income Tax Return (ITR) form image.\
        Suppose you are an expert in Income Tax Return (ITR) audit.\
        Perform the following tasks:\

            1. Calculate the Gross Salaryfrom given data where the gross salary is the sum of all types of incomes\
                whether it is taxable or not or it is Retirement benefit or not.\

            2. Make a small financial summary of the applicant based on whatever you have calculated.\

        The data is as follows: ```{salary_details}```
        """

    financial_summary_applicant = get_completion(prompt_financial_summary)

    fraud_detection_prompt = f"""
        Suppose you are a loan processor at a bank.\
        Based on the financial summary given in triple backticks and\
        loan application details in triple askerisks, detect whether the context of financial summary matches the fact that\
        the applicant will be able to repay the loan or not. Also note there is no pinode like 100001.\
        If the applicant is unable to repay the loan, then possibly the applicant is fraud.\
        If the applicant is a fraud, then output the reason for the same.\
        And if the applicant is not a fraud, then output the reason for the same that how he/she can possibly repay the loan.\

        Financial summary of applicant: ```{financial_summary_applicant}```

        Loan application details: ***{loan_application}***
        """

    fraud_detection_result = get_completion(fraud_detection_prompt)
    return fraud_detection_result

# Define the interface
input_image = gr.inputs.Image(label="Input ITR Image")
loan_application = gr.inputs.Textbox(label="Loan Application Details")

iface = gr.Interface(
    fn=analyze_sms_fraud,
    inputs=[input_image, loan_application],
    outputs=gr.outputs.Textbox(label="Fraud Detection Result"),
    title="Loan Fraud Detection",
    description="Analyze an ITR form image and loan application details for potential fraud using LangChain and OpenAI's GPT-3."
)

iface.launch()